import React from 'react';
import { Slider } from 'antd-hz';

const App: React.FC = () => <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />;

export default App;
