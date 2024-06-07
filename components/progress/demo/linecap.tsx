import React from 'react';
import { Flex, Progress } from 'antd-hz';

const App: React.FC = () => (
  <Flex vertical gap="small">
    <Progress strokeLinecap="butt" percent={75} />
    <Flex wrap="wrap" gap="small">
      <Progress strokeLinecap="butt" type="circle" percent={75} />
      <Progress strokeLinecap="butt" type="dashboard" percent={75} />
    </Flex>
  </Flex>
);

export default App;
