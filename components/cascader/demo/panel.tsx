import React from 'react';
import { Cascader, Flex } from 'antd-hz';
import type { MultipleCascaderProps, SingleCascaderProps } from 'antd/es/cascader';

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const onChange: SingleCascaderProps<Option>['onChange'] = (value) => {
  console.log(value);
};

const onMultipleChange: MultipleCascaderProps<Option>['onChange'] = (value) => {
  console.log(value);
};

const App: React.FC = () => (
  <Flex vertical gap="small" align="flex-start">
    <Cascader.Panel options={options} onChange={onChange} />
    <Cascader.Panel multiple options={options} onChange={onMultipleChange} />
    <Cascader.Panel />
  </Flex>
);

export default App;
