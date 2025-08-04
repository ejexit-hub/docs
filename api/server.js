const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.API_PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// LLM Configuration
const LLM_CONFIG = {
  // GPT4All
  gpt4all: {
    baseURL: process.env.GPT4ALL_BASE_URL || 'http://localhost:4891',
    model: process.env.GPT4ALL_MODEL || 'default',
    enabled: process.env.GPT4ALL_ENABLED === 'true'
  }
};

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    llmProviders: Object.keys(LLM_CONFIG).filter(key => LLM_CONFIG[key].enabled)
  });
});

// Get available LLM providers
app.get('/api/llm/providers', (req, res) => {
  const providers = Object.entries(LLM_CONFIG)
    .filter(([_, config]) => config.enabled)
    .map(([name, config]) => ({
      name,
      model: config.model,
      baseURL: config.baseURL
    }));
  
  res.json({ providers });
});

// Chat completion endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, provider = 'gpt4all', context = '', stream = false } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const llmConfig = LLM_CONFIG[provider];
    if (!llmConfig || !llmConfig.enabled) {
      return res.status(400).json({ error: `Provider ${provider} is not available` });
    }

    // Set response headers for streaming
    if (stream) {
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');
    }

    let response;
    
    switch (provider) {
      case 'gpt4all':
        response = await handleGPT4AllRequest(message, context, llmConfig, stream, res);
        break;
      default:
        return res.status(400).json({ error: 'Unsupported provider' });
    }

    if (!stream) {
      res.json(response);
    }
  } catch (error) {
    console.error('Chat API Error:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal server error', details: error.message });
    }
  }
});

// GPT4All handler
async function handleGPT4AllRequest(message, context, config, stream, res) {
  const payload = {
    model: config.model,
    prompt: context ? `${context}\n\nUser: ${message}\nAssistant:` : message,
    stream: stream,
    options: {
      temperature: 0.7,
      top_p: 0.9,
      max_tokens: 2048
    }
  };

  if (stream) {
    const response = await axios.post(`${config.baseURL}/api/generate`, payload, {
      responseType: 'stream'
    });

    response.data.on('data', (chunk) => {
      const lines = chunk.toString().split('\n');
      lines.forEach(line => {
        if (line.trim()) {
          try {
            const data = JSON.parse(line);
            if (data.response) {
              res.write(`data: ${JSON.stringify({ content: data.response, done: data.done })}\n\n`);
            }
          } catch (e) {
            // Skip invalid JSON
          }
        }
      });
    });

    response.data.on('end', () => {
      res.write('data: [DONE]\n\n');
      res.end();
    });
  } else {
    const response = await axios.post(`${config.baseURL}/api/generate`, payload);
    return {
      content: response.data.response,
      model: config.model,
      provider: 'gpt4all'
    };
  }
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Internal LLM API Server running on port ${PORT}`);
  console.log('📋 Available LLM Providers:');
  Object.entries(LLM_CONFIG).forEach(([name, config]) => {
    if (config.enabled) {
      console.log(`  ✅ ${name}: ${config.model} at ${config.baseURL}`);
    } else {
      console.log(`  ❌ ${name}: disabled`);
    }
  });
});

module.exports = app; 