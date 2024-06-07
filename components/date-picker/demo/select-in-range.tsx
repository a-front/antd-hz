import React, { useState } from 'react';
import { DatePicker } from 'antd-hz';
import type { DatePickerProps } from 'antd-hz';
import type { Dayjs } from 'dayjs';

const { RangePicker } = DatePicker;

type RangeValue = [Dayjs | null, Dayjs | null] | null;

const App: React.FC = () => {
  const [value, setValue] = useState<RangeValue>(null);

  const disabledDate: DatePickerProps['disabledDate'] = (current, { from }) => {
    if (from) {
      return Math.abs(current.diff(from, 'days')) >= 7;
    }

    return false;
  };

  return <RangePicker value={value} disabledDate={disabledDate} onChange={setValue} />;
};

export default App;
