import React from 'react';
import { QRCode, Space } from 'antd-hz';

const App: React.FC = () => (
  <Space>
    <QRCode type="canvas" value="https://ant.design/" />
    <QRCode type="svg" value="https://ant.design/" />
  </Space>
);

export default App;
