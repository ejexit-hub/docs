import React from 'react';
import clsx from 'clsx';

interface TechnicalCutline {
  category: string;
  item: string;
  specifications: string;
  value: string;
  notes?: string;
}

interface TechnicalCutlinesProps {
  category: string;
  data?: TechnicalCutline[];
}

// Sample data structure - this would be populated from the Excel file
const sampleData: Record<string, TechnicalCutline[]> = {
  servers: [
    {
      category: 'CPU',
      item: 'Intel Xeon E5-2680 v4',
      specifications: '14 cores, 2.4GHz, LGA 2011-3',
      value: '$150-200',
      notes: 'High demand in secondary market'
    },
    {
      category: 'CPU',
      item: 'Intel Xeon E5-2690 v4',
      specifications: '14 cores, 2.6GHz, LGA 2011-3',
      value: '$180-250',
      notes: 'Excellent for virtualization'
    },
    {
      category: 'Memory',
      item: 'DDR4 ECC 32GB',
      specifications: '32GB, 2400MHz, ECC',
      value: '$80-120',
      notes: 'Server-grade memory'
    },
    {
      category: 'Storage',
      item: 'SAS SSD 480GB',
      specifications: '480GB, SAS 12Gbps',
      value: '$120-180',
      notes: 'Enterprise-grade SSD'
    },
    {
      category: 'Storage',
      item: 'SAS HDD 1TB',
      specifications: '1TB, 7200RPM, SAS 12Gbps',
      value: '$40-60',
      notes: 'Reliable enterprise storage'
    }
  ],
  gpu: [
    {
      category: 'Gaming',
      item: 'NVIDIA RTX 3080',
      specifications: '10GB GDDR6X, 8704 CUDA cores',
      value: '$400-600',
      notes: 'High-end gaming performance'
    },
    {
      category: 'Workstation',
      item: 'NVIDIA RTX A4000',
      specifications: '16GB GDDR6, 6144 CUDA cores',
      value: '$800-1200',
      notes: 'Professional workstation card'
    }
  ]
};

export default function TechnicalCutlines({ category, data }: TechnicalCutlinesProps) {
  const cutlinesData = data || sampleData[category] || [];

  if (cutlinesData.length === 0) {
    return (
      <div className="technical-cutlines-container">
        <h2>Technical Cutlines</h2>
        <div className="alert alert--warning">
          <strong>Data Unavailable</strong>
          <p>
            Technical cutlines data for {category} is currently being updated. 
            Please check back later or contact the development team.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="technical-cutlines-container">
      <h2>Technical Cutlines</h2>
      <div className="alert alert--info">
        <strong>Technical Specifications & Value Guide</strong>
        <p>
          Below are the current market values and specifications for {category} components. 
          Values are approximate and may vary based on condition, market demand, and other factors.
        </p>
      </div>
      
      <div className="table-container">
        <table className="technical-cutlines-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Item</th>
              <th>Specifications</th>
              <th>Estimated Value</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {cutlinesData.map((item, index) => (
              <tr key={index} className={clsx('cutline-row', `category-${item.category.toLowerCase()}`)}>
                <td className="category-cell">
                  <span className="category-badge">{item.category}</span>
                </td>
                <td className="item-cell">
                  <strong>{item.item}</strong>
                </td>
                <td className="specs-cell">
                  <code>{item.specifications}</code>
                </td>
                <td className="value-cell">
                  <span className="value-badge">{item.value}</span>
                </td>
                <td className="notes-cell">
                  {item.notes && <span className="notes-text">{item.notes}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="cutlines-footer">
        <p className="disclaimer">
          <strong>Disclaimer:</strong> Values are estimates based on current market conditions. 
          Actual resale values may vary. Always verify specifications and test components before resale.
        </p>
      </div>
    </div>
  );
} 