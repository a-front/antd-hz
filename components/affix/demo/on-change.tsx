import React from 'react';
import { Affix, Button } from 'antd-hz';

const App: React.FC = () => (
  <Affix offsetTop={120} onChange={(affixed) => console.log(affixed)}>
    <Button>120px to affix top</Button>
  </Affix>
);

export default App;
