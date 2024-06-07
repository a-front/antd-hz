import type { FC } from 'react';
import React from 'react';
import { DatePicker } from 'antd-hz';

const { _InternalRangePanelDoNotUseOrYouWillBeFired: PureRangePicker } = DatePicker;

const Demo: FC = () => <PureRangePicker picker="month" />;

export default Demo;
