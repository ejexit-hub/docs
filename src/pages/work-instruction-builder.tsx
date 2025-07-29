import React from 'react';
import Layout from '@theme/Layout';
import WorkInstructionBuilder from '../components/WorkInstructionBuilder';

export default function WorkInstructionBuilderPage(): JSX.Element {
  return (
    <Layout
      title="Work Instruction Builder"
      description="Create professional work instructions with pictures easily"
    >
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--12">
            <div className="text-center margin-bottom--xl">
              <h1 className="hero__title">
                🚀 Interactive Work Instruction Builder
              </h1>
              <p className="hero__subtitle">
                Create professional work instructions with pictures easily. Build step-by-step guides, 
                add images, and export them as markdown files for your website.
              </p>
            </div>
            
            <WorkInstructionBuilder />
          </div>
        </div>
      </div>
    </Layout>
  );
}