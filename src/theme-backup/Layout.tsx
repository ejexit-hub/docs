import React from 'react';
import Layout from '@theme-original/Layout';
import ChatButton from '@site/src/components/ChatButton';

export default function CustomLayout(props) {
  return (
    <>
      <Layout {...props} />
      <ChatButton />
    </>
  );
} 