import React from 'react';
import type { PaginationProps } from 'antd-hz';
import { Pagination } from 'antd-hz';

const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};

const App: React.FC = () => <Pagination total={500} itemRender={itemRender} />;

export default App;
