import React from 'react';
import Layout from '@theme/Layout';
import WorkInstructionBuilder from '../components/WorkInstructionBuilder';

export default function WorkInstructionBuilderPage(): JSX.Element {
  return (
    <Layout
      title="Work Instruction Builder"
      description="Create professional work instructions with pictures easily"
    >
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Work Instruction Builder
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create professional work instructions with pictures easily. Build step-by-step guides, 
              add images, and export them as markdown files for your website.
            </p>
          </div>
          
          <WorkInstructionBuilder />
        </div>
      </main>
    </Layout>
  );
}