import React from 'react';
import type { PaginationProps } from 'antd-hz';
import { Pagination } from 'antd-hz';

const showTotal: PaginationProps['showTotal'] = (total) => `Total ${total} items`;

const App: React.FC = () => (
  <>
    <Pagination size="small" total={50} />
    <Pagination size="small" total={50} showSizeChanger showQuickJumper />
    <Pagination size="small" total={50} showTotal={showTotal} />
    <Pagination
      size="small"
      total={50}
      disabled
      showTotal={showTotal}
      showSizeChanger
      showQuickJumper
    />
  </>
);

export default App;
