import React from 'react';
import { Checkbox } from 'antd-hz';
import type { CheckboxProps } from 'antd-hz';

const onChange: CheckboxProps['onChange'] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const App: React.FC = () => <Checkbox onChange={onChange}>Checkbox</Checkbox>;

export default App;
