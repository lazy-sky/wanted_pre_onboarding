import './App.css'

import Dropdown from './components/Dropdown'
import Input from './components/Input'
import Slider from './components/Slider'
import Tab from './components/Tab'
import Toggle from './components/Toggle'
import { basePoints, dropdownItems, tabItems, toggleItems } from './data'

function App() {
  return (
    <div className='App'>
      <h1>Pre Onboarding 과제</h1>
      <Toggle title='Toggle' items={toggleItems} isDetail={false} />
      <Tab title='Tab' items={tabItems} currentTabIndex={0} />
      <Slider title='Slider' basePoints={basePoints} currentValue={50} />
      <Input title='Input' />
      <Dropdown title='Dropdown' items={dropdownItems} currentItem={dropdownItems[0]} />
    </div>
  )
}

export default App
