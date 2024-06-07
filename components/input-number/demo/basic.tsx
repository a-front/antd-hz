import React from 'react';
import type { InputNumberProps } from 'antd-hz';
import { InputNumber } from 'antd-hz';

const onChange: InputNumberProps['onChange'] = (value) => {
  console.log('changed', value);
};

const App: React.FC = () => <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />;

export default App;
