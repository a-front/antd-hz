import React from 'react';
import type { DatePickerProps } from 'antd-hz';
import { DatePicker, Space } from 'antd-hz';
import type { Dayjs } from 'dayjs';

const onChange: DatePickerProps<Dayjs[]>['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <DatePicker onChange={onChange} needConfirm />
    <DatePicker onChange={onChange} showTime needConfirm={false} />
  </Space>
);

export default App;
