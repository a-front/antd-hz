import type { FC } from 'react';
import React from 'react';
import { DatePicker } from 'antd-hz';

const { _InternalPanelDoNotUseOrYouWillBeFired: PureDatePicker } = DatePicker;

const Demo: FC = () => <PureDatePicker />;

export default Demo;
