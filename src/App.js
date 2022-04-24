import './App.css';

import Dropdown from './components/Dropdown';
import Input from './components/Input';
import Slider from './components/Slider';
import Tab from './components/Tab';
import Toggle from './components/Toggle';
import {
  basePoints,
  dropdwonItems,
  tabItems,
  toggleItems,
} from './data';

function App() {
  return (
    <div className="App">
      <Tab
        title="Tab"
        items={tabItems}
        currentTabIndex={0}
      />
      <Toggle
        title="Toggle"
        items={toggleItems}
        isDetail={false}
      />
      <Input />
      <Slider
        title="Slider"
        basePoints={basePoints}
        currentValue={50}
      />
      <Dropdown
        title="Dropdown"
        items={dropdwonItems}
        currentItem={dropdwonItems[0]}
      />
    </div>
  );
}

export default App;
