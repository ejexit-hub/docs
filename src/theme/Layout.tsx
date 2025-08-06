import React from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type {WrapperProps} from '@docusaurus/types';
// import ChatButton from '@site/src/components/ChatButton'; // Temporarily disabled

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    <>
      <Layout {...props} />
      {/* <ChatButton /> */} {/* Temporarily disabled - will be re-enabled in the future */}
    </>
  );
} 