import React from 'react';
import { Flex, Spin } from 'antd-hz';

const App: React.FC = () => (
  <Flex align="center" gap="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Flex>
);

export default App;
