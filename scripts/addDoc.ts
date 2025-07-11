#!/usr/bin/env ts-node
import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import readline from 'readline';

// Utility to convert a string to kebab-case
function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

async function prompt(question: string): Promise<string> {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => rl.question(question, ans => { rl.close(); resolve(ans); }));
}

async function main() {
  const inputFile = process.argv[2];
  if (!inputFile) {
    console.error('Usage: pnpm ts-node scripts/addDoc.ts <file>');
    process.exit(1);
  }

  // 1. Use pandoc to convert input file to Markdown
  const ext = path.extname(inputFile).toLowerCase();
  if (!['.pdf', '.docx', '.csv'].includes(ext)) {
    console.error('Supported file types: PDF, DOCX, CSV');
    process.exit(1);
  }

  let markdown = '';
  try {
    markdown = execSync(`pandoc "${inputFile}" -f ${ext === '.csv' ? 'csv' : ext.slice(1)} -t markdown`, { encoding: 'utf-8' });
  } catch (err) {
    console.error('Pandoc conversion failed:', err);
    process.exit(1);
  }

  // 2. Prompt for title and description
  // TODO: Use file name as default title, prompt for description

  // 3. Prepend front-matter
  // TODO: Add YAML front-matter to Markdown

  // 4. Save to /docs with kebab-case filename
  // TODO: Write file to ../docs/

  // 5. Auto-git-commit
  // TODO: Run git add/commit

  console.log('Document import CLI scaffolded.');
}

main().catch(err => { console.error(err); process.exit(1); }); 