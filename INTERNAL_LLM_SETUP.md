# Internal LLM Integration Setup Guide

This guide explains how to set up and use internal LLMs with your ExitTech Wiki website.

## Overview

The implementation includes:
- **Backend API Server** - Node.js server that interfaces with local LLMs
- **Frontend Chat Interface** - React component integrated into Docusaurus
- **Multiple LLM Support** - Ollama, LocalAI, and LM Studio
- **Streaming Responses** - Real-time chat experience
- **Authentication Integration** - Works with existing Supabase auth

## Prerequisites

1. **Node.js 18+** installed on your server
2. **Local LLM** running (Ollama, LocalAI, or LM Studio)
3. **Network access** between your web server and LLM server

## Quick Setup

### 1. Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install API server dependencies
cd api
npm install
cd ..
```

### 2. Configure Environment

Copy the example environment file and configure it:

```bash
cp env.example .env
```

Edit `.env` with your specific configuration:

```env
# Frontend Configuration
REACT_APP_SUPABASE_URL=https://your-supabase-url.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key
REACT_APP_API_URL=http://localhost:3001

# API Server Configuration
API_PORT=3001
FRONTEND_URL=http://localhost:3000

# LLM Provider Configuration
OLLAMA_ENABLED=true
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=llama2
```

### 3. Start the Services

```bash
# Terminal 1: Start the API server
npm run dev:api

# Terminal 2: Start the frontend
npm start
```

## LLM Provider Setup

### Ollama (Recommended)

1. **Install Ollama**:
   ```bash
   # macOS/Linux
   curl -fsSL https://ollama.ai/install.sh | sh
   
   # Windows
   # Download from https://ollama.ai/download
   ```

2. **Pull a Model**:
   ```bash
   ollama pull llama2
   # or
   ollama pull mistral
   ```

3. **Start Ollama**:
   ```bash
   ollama serve
   ```

4. **Configure Environment**:
   ```env
   OLLAMA_ENABLED=true
   OLLAMA_BASE_URL=http://localhost:11434
   OLLAMA_MODEL=llama2
   ```

### LocalAI

1. **Install LocalAI**:
   ```bash
   # Using Docker
   docker run -d --name localai -p 8080:8080 quay.io/go-skynet/local-ai:latest
   ```

2. **Configure Environment**:
   ```env
   LOCALAI_ENABLED=true
   LOCALAI_BASE_URL=http://localhost:8080
   LOCALAI_MODEL=gpt-3.5-turbo
   ```

### LM Studio

1. **Download LM Studio** from https://lmstudio.ai/
2. **Load a model** and start the local server
3. **Configure Environment**:
   ```env
   LMSTUDIO_ENABLED=true
   LMSTUDIO_BASE_URL=http://localhost:1234
   LMSTUDIO_MODEL=default
   ```

## Production Deployment

### API Server Deployment

1. **Deploy the API server** to your server:
   ```bash
   cd api
   npm install --production
   npm start
   ```

2. **Use PM2 for process management**:
   ```bash
   npm install -g pm2
   pm2 start server.js --name "internal-llm-api"
   pm2 save
   pm2 startup
   ```

3. **Configure reverse proxy** (nginx example):
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location /api/ {
           proxy_pass http://localhost:3001;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

### Frontend Deployment

1. **Update environment variables** for production:
   ```env
   REACT_APP_API_URL=https://your-domain.com
   ```

2. **Build and deploy**:
   ```bash
   npm run build
   # Deploy the build/ directory to your web server
   ```

## Usage

### For Users

1. **Access the chat** by clicking the floating chat button (bottom-right corner)
2. **Select LLM provider** in the settings panel
3. **Ask questions** about Exit Technologies products and procedures
4. **View responses** in real-time with streaming

### For Administrators

1. **Monitor API health**:
   ```bash
   curl http://localhost:3001/health
   ```

2. **Check available providers**:
   ```bash
   curl http://localhost:3001/api/llm/providers
   ```

3. **Test chat endpoint**:
   ```bash
   curl -X POST http://localhost:3001/api/chat \
     -H "Content-Type: application/json" \
     -d '{"message": "Hello", "provider": "ollama"}'
   ```

## Customization

### Adding New LLM Providers

1. **Add configuration** to `api/server.js`:
   ```javascript
   const LLM_CONFIG = {
     // ... existing providers
     yourProvider: {
       baseURL: process.env.YOUR_PROVIDER_BASE_URL,
       model: process.env.YOUR_PROVIDER_MODEL,
       enabled: process.env.YOUR_PROVIDER_ENABLED === 'true'
     }
   };
   ```

2. **Add handler function**:
   ```javascript
   async function handleYourProviderRequest(message, context, config, stream, res) {
     // Implementation for your provider
   }
   ```

3. **Update switch statement** in the chat endpoint

### Customizing the Chat Interface

- **Styling**: Modify `src/components/InternalChat.tsx`
- **Behavior**: Update chat logic and context
- **Integration**: Add to specific pages or modify global layout

## Troubleshooting

### Common Issues

1. **API server not starting**:
   - Check if port 3001 is available
   - Verify Node.js version (18+)
   - Check environment variables

2. **LLM not responding**:
   - Verify LLM service is running
   - Check network connectivity
   - Review LLM logs

3. **CORS errors**:
   - Update `FRONTEND_URL` in environment
   - Check API server CORS configuration

4. **Streaming not working**:
   - Verify browser supports ReadableStream
   - Check network proxy settings

### Debug Mode

Enable debug logging by setting:
```env
DEBUG=true
```

## Security Considerations

1. **Network Security**: Ensure LLM servers are not exposed to public internet
2. **Authentication**: Consider adding API authentication for production
3. **Rate Limiting**: Implement rate limiting for chat endpoints
4. **Input Validation**: Validate and sanitize user inputs
5. **Logging**: Monitor and log API usage

## Performance Optimization

1. **Model Selection**: Choose appropriate model size for your use case
2. **Caching**: Implement response caching for common questions
3. **Connection Pooling**: Optimize database connections
4. **Load Balancing**: Use multiple LLM instances for high traffic

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review API server logs
3. Test with curl commands
4. Verify environment configuration 