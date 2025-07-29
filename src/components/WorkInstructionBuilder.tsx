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
      <div className="margin-bottom--lg">
        <div className="button-group button-group--block">
          <button
            className={`button button--${activeTab === 'builder' ? 'primary' : 'secondary'}`}
            onClick={() => setActiveTab('builder')}
          >
            <Plus className="button__icon" />
            Builder
          </button>
          <button
            className={`button button--${activeTab === 'preview' ? 'primary' : 'secondary'}`}
            onClick={() => setActiveTab('preview')}
          >
            <Eye className="button__icon" />
            Preview
          </button>
          <button
            className={`button button--${activeTab === 'export' ? 'primary' : 'secondary'}`}
            onClick={() => setActiveTab('export')}
          >
            <Download className="button__icon" />
            Export
          </button>
        </div>
      </div>

      {activeTab === 'builder' && (
        <div className="margin-bottom--lg">
          {/* Basic Information */}
          <div className="card margin-bottom--lg">
            <div className="card__header">
              <h3 className="card__title">
                Basic Information
                <Badge variant="secondary" className="margin-left--sm">Required</Badge>
              </h3>
            </div>
            <div className="card__body">
              <div className="margin-bottom--md">
                <label className="form__label">Title</label>
                <Input
                  placeholder="Enter work instruction title..."
                  value={workInstruction.title}
                  onChange={(e) => setWorkInstruction(prev => ({ ...prev, title: e.target.value }))}
                />
              </div>
              <div>
                <label className="form__label">Description</label>
                <Textarea
                  placeholder="Brief description of the work instruction..."
                  value={workInstruction.description}
                  onChange={(e) => setWorkInstruction(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Prerequisites */}
          <div className="card margin-bottom--lg">
            <div className="card__header">
              <h3 className="card__title">Prerequisites</h3>
              <button className="button button--sm button--outline" onClick={addPrerequisite}>
                <Plus className="button__icon" />
                Add Prerequisite
              </button>
            </div>
            <div className="card__body">
              <div className="margin-bottom--sm">
                {workInstruction.prerequisites.map((prereq, index) => (
                  <div key={index} className="margin-bottom--sm">
                    <div className="input-group">
                      <Input
                        placeholder="Enter prerequisite..."
                        value={prereq}
                        onChange={(e) => updatePrerequisite(index, e.target.value)}
                      />
                      <button
                        onClick={() => removePrerequisite(index)}
                        className="button button--sm button--outline button--danger"
                      >
                        <Trash2 className="button__icon" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="card margin-bottom--lg">
            <div className="card__header">
              <h3 className="card__title">Steps</h3>
              <button className="button button--sm button--outline" onClick={addStep}>
                <Plus className="button__icon" />
                Add Step
              </button>
            </div>
            <div className="card__body">
              <div className="margin-bottom--lg">
                {workInstruction.steps.map((step, index) => (
                  <div key={step.id} className="card margin-bottom--md">
                    <div className="card__header">
                      <h4 className="card__title">Step {index + 1}</h4>
                      <button
                        onClick={() => removeStep(step.id)}
                        className="button button--sm button--outline button--danger"
                      >
                        <Trash2 className="button__icon" />
                      </button>
                    </div>
                    <div className="card__body">
                      <div className="margin-bottom--md">
                        <label className="form__label">Step Title</label>
                        <Input
                          placeholder="Enter step title..."
                          value={step.title}
                          onChange={(e) => updateStep(step.id, 'title', e.target.value)}
                        />
                      </div>
                      
                      <div className="margin-bottom--md">
                        <label className="form__label">Description</label>
                        <Textarea
                          placeholder="Describe this step..."
                          value={step.description}
                          onChange={(e) => updateStep(step.id, 'description', e.target.value)}
                          rows={3}
                        />
                      </div>
                      
                      <div className="margin-bottom--md">
                        <label className="form__label">Image</label>
                        <div className="input-group">
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) handleImageUpload(step.id, file);
                            }}
                          />
                          {step.imagePreview && (
                            <img
                              src={step.imagePreview}
                              alt="Preview"
                              className="img-preview"
                            />
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <label className="form__label">Important Notes</label>
                        <div className="margin-bottom--sm">
                          {step.notes.map((note, noteIndex) => (
                            <div key={noteIndex} className="margin-bottom--sm">
                              <div className="input-group">
                                <Input
                                  placeholder="Enter important note..."
                                  value={note}
                                  onChange={(e) => {
                                    const newNotes = [...step.notes];
                                    newNotes[noteIndex] = e.target.value;
                                    updateStep(step.id, 'notes', newNotes);
                                  }}
                                />
                                <button
                                  onClick={() => {
                                    const newNotes = step.notes.filter((_, i) => i !== noteIndex);
                                    updateStep(step.id, 'notes', newNotes);
                                  }}
                                  className="button button--sm button--outline button--danger"
                                >
                                  <Trash2 className="button__icon" />
                                </button>
                              </div>
                            </div>
                          ))}
                          <button
                            onClick={() => {
                              const newNotes = [...step.notes, ''];
                              updateStep(step.id, 'notes', newNotes);
                            }}
                            className="button button--sm button--outline"
                          >
                            <Plus className="button__icon" />
                            Add Note
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="card margin-bottom--lg">
            <div className="card__header">
              <h3 className="card__title">Troubleshooting</h3>
              <button className="button button--sm button--outline" onClick={addTroubleshooting}>
                <Plus className="button__icon" />
                Add Issue
              </button>
            </div>
            <div className="card__body">
              <div className="margin-bottom--lg">
                {workInstruction.troubleshooting.map((item, index) => (
                  <div key={index} className="card margin-bottom--md">
                    <div className="card__header">
                      <h4 className="card__title">Issue {index + 1}</h4>
                      <button
                        onClick={() => removeTroubleshooting(index)}
                        className="button button--sm button--outline button--danger"
                      >
                        <Trash2 className="button__icon" />
                      </button>
                    </div>
                    <div className="card__body">
                      <div className="margin-bottom--md">
                        <label className="form__label">Issue Description</label>
                        <Input
                          placeholder="Describe the issue..."
                          value={item.issue}
                          onChange={(e) => updateTroubleshooting(index, 'issue', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="form__label">Solution</label>
                        <Textarea
                          placeholder="Provide the solution..."
                          value={item.solution}
                          onChange={(e) => updateTroubleshooting(index, 'solution', e.target.value)}
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Safety Notes */}
          <div className="card">
            <div className="card__header">
              <h3 className="card__title">Safety Notes</h3>
              <button className="button button--sm button--outline" onClick={addSafetyNote}>
                <Plus className="button__icon" />
                Add Safety Note
              </button>
            </div>
            <div className="card__body">
              <div className="margin-bottom--sm">
                {workInstruction.safetyNotes.map((note, index) => (
                  <div key={index} className="margin-bottom--sm">
                    <div className="input-group">
                      <Textarea
                        placeholder="Enter safety note..."
                        value={note}
                        onChange={(e) => updateSafetyNote(index, e.target.value)}
                        rows={2}
                      />
                      <button
                        onClick={() => removeSafetyNote(index)}
                        className="button button--sm button--outline button--danger"
                      >
                        <Trash2 className="button__icon" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'preview' && (
        <div className="card">
          <div className="card__header">
            <h3 className="card__title">Preview</h3>
          </div>
          <div className="card__body">
            <div className="theme-doc-markdown" data-path="work-instructions-preview">
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
                      className="img-preview"
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
                    <details key={index} className="margin-bottom--md">
                      <summary className="cursor-pointer font-semibold">{item.issue || 'Issue description...'}</summary>
                      <div className="margin-top--sm padding--md bg-gray-50 rounded">
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
                    <div key={index} className="admonition admonition--warning margin-bottom--md">
                      <div className="admonition__heading">
                        <h5 className="admonition__title">⚠️ Safety Alert</h5>
                      </div>
                      <div className="admonition__content">
                        <p>{note}</p>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'export' && (
        <div className="card">
          <div className="card__header">
            <h3 className="card__title">Export Work Instruction</h3>
          </div>
          <div className="card__body">
            <div className="margin-bottom--lg">
              <h4 className="margin-bottom--md">Generated Markdown</h4>
              <pre className="code-block">
                {generateMarkdown()}
              </pre>
            </div>
            <div className="button-group margin-bottom--lg">
              <button onClick={downloadMarkdown} className="button button--primary">
                <Download className="button__icon" />
                Download Markdown
              </button>
              <button
                onClick={() => navigator.clipboard.writeText(generateMarkdown())}
                className="button button--outline"
              >
                Copy to Clipboard
              </button>
            </div>
            <div className="admonition admonition--info">
              <div className="admonition__heading">
                <h5 className="admonition__title">Next Steps:</h5>
              </div>
              <div className="admonition__content">
                <ol>
                  <li>Download the markdown file</li>
                  <li>Save it to <code>docs/work-instructions/your-instruction-name.md</code></li>
                  <li>Upload your images to <code>static/img/work-instructions/</code></li>
                  <li>Update image paths in the markdown file</li>
                  <li>Commit and push to see it on your website!</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}