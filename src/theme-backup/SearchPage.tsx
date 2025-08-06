import React from 'react';
import SearchPage from '@theme-original/SearchPage';
import type SearchPageType from '@theme/SearchPage';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof SearchPageType>;

export default function SearchPageWrapper(props: Props): JSX.Element {
  return (
    <>
      <SearchPage {...props} />
    </>
  );
} 