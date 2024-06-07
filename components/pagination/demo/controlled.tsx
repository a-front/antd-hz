import React, { useState } from 'react';
import type { PaginationProps } from 'antd-hz';
import { Pagination } from 'antd-hz';

const App: React.FC = () => {
  const [current, setCurrent] = useState(3);

  const onChange: PaginationProps['onChange'] = (page) => {
    console.log(page);
    setCurrent(page);
  };

  return <Pagination current={current} onChange={onChange} total={50} />;
};

export default App;
