import React from 'react';
import DefaultLayout from '@theme-original/DocItem/Layout';
import { useLocation } from '@docusaurus/router';
import ProductTrainingSidebar from '../../components/ProductTrainingSidebar';

export default function DocItemLayout(props) {
  const location = useLocation();
  const isProductTraining = location.pathname.includes('/docs/product-training/');

  if (isProductTraining) {
    // Only render the main content (your .mdx file, which includes your custom sidebar)
    return <div>{props.children}</div>;
  }
  // For all other docs, use the default layout (with sidebar)
  return <DefaultLayout {...props} />;
}