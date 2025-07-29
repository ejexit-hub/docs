'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Plus, Upload, Trash2, Save, Eye, Download } from 'lucide-react';

interface Step {
  id: string;
  title: string;
  description: string;
  image: File | null;
  imagePreview: string;
  notes: string[];
}

interface WorkInstruction {
  title: string;
  description: string;
  prerequisites: string[];
  steps: Step[];
  troubleshooting: { issue: string; solution: string }[];
  safetyNotes: string[];
}

export default function WorkInstructionBuilder() {
  const [workInstruction, setWorkInstruction] = useState<WorkInstruction>({
    title: '',
    description: '',
    prerequisites: [''],
    steps: [],
    troubleshooting: [],
    safetyNotes: []
  });

  const [activeTab, setActiveTab] = useState<'builder' | 'preview' | 'export'>('builder');

  const addStep = () => {
    const newStep: Step = {
      id: Date.now().toString(),
      title: '',
      description: '',
      image: null,
      imagePreview: '',
      notes: ['']
    };
    setWorkInstruction(prev => ({
      ...prev,
      steps: [...prev.steps, newStep]
    }));
  };

  const updateStep = (stepId: string, field: keyof Step, value: any) => {
    setWorkInstruction(prev => ({
      ...prev,
      steps: prev.steps.map(step =>
        step.id === stepId ? { ...step, [field]: value } : step
      )
    }));
  };

  const removeStep = (stepId: string) => {
    setWorkInstruction(prev => ({
      ...prev,
      steps: prev.steps.filter(step => step.id !== stepId)
    }));
  };

  const handleImageUpload = (stepId: string, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      updateStep(stepId, 'image', file);
      updateStep(stepId, 'imagePreview', e.target?.result);
    };
    reader.readAsDataURL(file);
  };

  const addPrerequisite = () => {
    setWorkInstruction(prev => ({
      ...prev,
      prerequisites: [...prev.prerequisites, '']
    }));
  };

  const updatePrerequisite = (index: number, value: string) => {
    setWorkInstruction(prev => ({
      ...prev,
      prerequisites: prev.prerequisites.map((prereq, i) => i === index ? value : prereq)
    }));
  };

  const removePrerequisite = (index: number) => {
    setWorkInstruction(prev => ({
      ...prev,
      prerequisites: prev.prerequisites.filter((_, i) => i !== index)
    }));
  };

  const addTroubleshooting = () => {
    setWorkInstruction(prev => ({
      ...prev,
      troubleshooting: [...prev.troubleshooting, { issue: '', solution: '' }]
    }));
  };

  const updateTroubleshooting = (index: number, field: 'issue' | 'solution', value: string) => {
    setWorkInstruction(prev => ({
      ...prev,
      troubleshooting: prev.troubleshooting.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const removeTroubleshooting = (index: number) => {
    setWorkInstruction(prev => ({
      ...prev,
      troubleshooting: prev.troubleshooting.filter((_, i) => i !== index)
    }));
  };

  const addSafetyNote = () => {
    setWorkInstruction(prev => ({
      ...prev,
      safetyNotes: [...prev.safetyNotes, '']
    }));
  };

  const updateSafetyNote = (index: number, value: string) => {
    setWorkInstruction(prev => ({
      ...prev,
      safetyNotes: prev.safetyNotes.map((note, i) => i === index ? value : note)
    }));
  };

  const removeSafetyNote = (index: number) => {
    setWorkInstruction(prev => ({
      ...prev,
      safetyNotes: prev.safetyNotes.filter((_, i) => i !== index)
    }));
  };

  const generateMarkdown = () => {
    let markdown = `---
id: ${workInstruction.title.toLowerCase().replace(/\s+/g, '-')}
title: ${workInstruction.title}
sidebar_label: ${workInstruction.title}
description: ${workInstruction.description}
---

# ${workInstruction.title}

${workInstruction.description}

## Prerequisites

${workInstruction.prerequisites.filter(p => p.trim()).map(prereq => `- ${prereq}`).join('\n')}

`;

    workInstruction.steps.forEach((step, index) => {
      markdown += `## Step ${index + 1}: ${step.title}

${step.description}

${step.imagePreview ? `![Step ${index + 1} - ${step.title}](/img/work-instructions/step${index + 1}-${step.title.toLowerCase().replace(/\s+/g, '-')}.jpg)

` : ''}**Important Notes:**
${step.notes.filter(note => note.trim()).map(note => `- ${note}`).join('\n')}

`;
    });

    if (workInstruction.troubleshooting.length > 0) {
      markdown += `## Troubleshooting

### Common Issues

${workInstruction.troubleshooting.map((item, index) => `
<details>
<summary>${item.issue}</summary>

**Solution:**
${item.solution}
</details>
`).join('\n')}

`;
    }

    if (workInstruction.safetyNotes.length > 0) {
      markdown += `## Safety Reminders

${workInstruction.safetyNotes.filter(note => note.trim()).map(note => `
:::warning Safety Alert
${note}
:::
`).join('\n')}

`;
    }

    return markdown;
  };

  const downloadMarkdown = () => {
    const markdown = generateMarkdown();
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${workInstruction.title.toLowerCase().replace(/\s+/g, '-')}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="work-instruction-builder">
      {/* Tab Navigation */}
      <div className="flex space-x-2 mb-6">
        <Button
          variant={activeTab === 'builder' ? 'default' : 'outline'}
          onClick={() => setActiveTab('builder')}
          className="flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Builder</span>
        </Button>
        <Button
          variant={activeTab === 'preview' ? 'default' : 'outline'}
          onClick={() => setActiveTab('preview')}
          className="flex items-center space-x-2"
        >
          <Eye className="w-4 h-4" />
          <span>Preview</span>
        </Button>
        <Button
          variant={activeTab === 'export' ? 'default' : 'outline'}
          onClick={() => setActiveTab('export')}
          className="flex items-center space-x-2"
        >
          <Download className="w-4 h-4" />
          <span>Export</span>
        </Button>
      </div>

      {activeTab === 'builder' && (
        <div className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>Basic Information</span>
                <Badge variant="secondary">Required</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <Input
                  placeholder="Enter work instruction title..."
                  value={workInstruction.title}
                  onChange={(e) => setWorkInstruction(prev => ({ ...prev, title: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea
                  placeholder="Brief description of the work instruction..."
                  value={workInstruction.description}
                  onChange={(e) => setWorkInstruction(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Prerequisites */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Prerequisites</span>
                <Button onClick={addPrerequisite} size="sm" variant="outline">
                  <Plus className="w-4 h-4 mr-1" />
                  Add Prerequisite
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {workInstruction.prerequisites.map((prereq, index) => (
                  <div key={index} className="flex space-x-2">
                    <Input
                      placeholder="Enter prerequisite..."
                      value={prereq}
                      onChange={(e) => updatePrerequisite(index, e.target.value)}
                    />
                    <Button
                      onClick={() => removePrerequisite(index)}
                      size="sm"
                      variant="outline"
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Steps */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Steps</span>
                <Button onClick={addStep} size="sm" variant="outline">
                  <Plus className="w-4 h-4 mr-1" />
                  Add Step
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {workInstruction.steps.map((step, index) => (
                  <div key={step.id} className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold">Step {index + 1}</h4>
                      <Button
                        onClick={() => removeStep(step.id)}
                        size="sm"
                        variant="outline"
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Step Title</label>
                        <Input
                          placeholder="Enter step title..."
                          value={step.title}
                          onChange={(e) => updateStep(step.id, 'title', e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <Textarea
                          placeholder="Describe this step..."
                          value={step.description}
                          onChange={(e) => updateStep(step.id, 'description', e.target.value)}
                          rows={3}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Image</label>
                        <div className="flex items-center space-x-4">
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) handleImageUpload(step.id, file);
                            }}
                            className="flex-1"
                          />
                          {step.imagePreview && (
                            <img
                              src={step.imagePreview}
                              alt="Preview"
                              className="w-20 h-20 object-cover rounded border"
                            />
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Important Notes</label>
                        <div className="space-y-2">
                          {step.notes.map((note, noteIndex) => (
                            <div key={noteIndex} className="flex space-x-2">
                              <Input
                                placeholder="Enter important note..."
                                value={note}
                                onChange={(e) => {
                                  const newNotes = [...step.notes];
                                  newNotes[noteIndex] = e.target.value;
                                  updateStep(step.id, 'notes', newNotes);
                                }}
                              />
                              <Button
                                onClick={() => {
                                  const newNotes = step.notes.filter((_, i) => i !== noteIndex);
                                  updateStep(step.id, 'notes', newNotes);
                                }}
                                size="sm"
                                variant="outline"
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                          <Button
                            onClick={() => {
                              const newNotes = [...step.notes, ''];
                              updateStep(step.id, 'notes', newNotes);
                            }}
                            size="sm"
                            variant="outline"
                          >
                            <Plus className="w-4 h-4 mr-1" />
                            Add Note
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Troubleshooting */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Troubleshooting</span>
                <Button onClick={addTroubleshooting} size="sm" variant="outline">
                  <Plus className="w-4 h-4 mr-1" />
                  Add Issue
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {workInstruction.troubleshooting.map((item, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold">Issue {index + 1}</h4>
                      <Button
                        onClick={() => removeTroubleshooting(index)}
                        size="sm"
                        variant="outline"
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <Input
                        placeholder="Describe the issue..."
                        value={item.issue}
                        onChange={(e) => updateTroubleshooting(index, 'issue', e.target.value)}
                      />
                      <Textarea
                        placeholder="Provide the solution..."
                        value={item.solution}
                        onChange={(e) => updateTroubleshooting(index, 'solution', e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Safety Notes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Safety Notes</span>
                <Button onClick={addSafetyNote} size="sm" variant="outline">
                  <Plus className="w-4 h-4 mr-1" />
                  Add Safety Note
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {workInstruction.safetyNotes.map((note, index) => (
                  <div key={index} className="flex space-x-2">
                    <Textarea
                      placeholder="Enter safety note..."
                      value={note}
                      onChange={(e) => updateSafetyNote(index, e.target.value)}
                      rows={2}
                    />
                    <Button
                      onClick={() => removeSafetyNote(index)}
                      size="sm"
                      variant="outline"
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'preview' && (
        <div className="preview-container">
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <h1>{workInstruction.title || 'Work Instruction Title'}</h1>
                <p>{workInstruction.description || 'Description will appear here...'}</p>
                
                {workInstruction.prerequisites.filter(p => p.trim()).length > 0 && (
                  <>
                    <h2>Prerequisites</h2>
                    <ul>
                      {workInstruction.prerequisites.filter(p => p.trim()).map((prereq, index) => (
                        <li key={index}>{prereq}</li>
                      ))}
                    </ul>
                  </>
                )}

                {workInstruction.steps.map((step, index) => (
                  <div key={step.id} className="step-preview">
                    <h2>Step {index + 1}: {step.title || 'Step Title'}</h2>
                    <p>{step.description || 'Step description...'}</p>
                    {step.imagePreview && (
                      <img
                        src={step.imagePreview}
                        alt={`Step ${index + 1}`}
                        className="w-full max-w-md rounded-lg border"
                      />
                    )}
                    {step.notes.filter(note => note.trim()).length > 0 && (
                      <>
                        <p><strong>Important Notes:</strong></p>
                        <ul>
                          {step.notes.filter(note => note.trim()).map((note, noteIndex) => (
                            <li key={noteIndex}>{note}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                ))}

                {workInstruction.troubleshooting.length > 0 && (
                  <>
                    <h2>Troubleshooting</h2>
                    <h3>Common Issues</h3>
                    {workInstruction.troubleshooting.map((item, index) => (
                      <details key={index} className="mb-4">
                        <summary className="cursor-pointer font-semibold">{item.issue || 'Issue description...'}</summary>
                        <div className="mt-2 p-4 bg-gray-50 rounded">
                          <p><strong>Solution:</strong></p>
                          <p>{item.solution || 'Solution details...'}</p>
                        </div>
                      </details>
                    ))}
                  </>
                )}

                {workInstruction.safetyNotes.filter(note => note.trim()).length > 0 && (
                  <>
                    <h2>Safety Reminders</h2>
                    {workInstruction.safetyNotes.filter(note => note.trim()).map((note, index) => (
                      <div key={index} className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                        <p className="font-semibold text-yellow-800">⚠️ Safety Alert</p>
                        <p className="text-yellow-700">{note}</p>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'export' && (
        <div className="export-container">
          <Card>
            <CardHeader>
              <CardTitle>Export Work Instruction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Generated Markdown</h3>
                <pre className="text-sm overflow-x-auto bg-white p-4 rounded border">
                  {generateMarkdown()}
                </pre>
              </div>
              <div className="flex space-x-4">
                <Button onClick={downloadMarkdown} className="flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download Markdown</span>
                </Button>
                <Button
                  onClick={() => navigator.clipboard.writeText(generateMarkdown())}
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <span>Copy to Clipboard</span>
                </Button>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Next Steps:</h4>
                <ol className="text-blue-700 space-y-1">
                  <li>1. Download the markdown file</li>
                  <li>2. Save it to <code>docs/work-instructions/your-instruction-name.md</code></li>
                  <li>3. Upload your images to <code>static/img/work-instructions/</code></li>
                  <li>4. Update image paths in the markdown file</li>
                  <li>5. Commit and push to see it on your website!</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}