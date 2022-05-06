import PropTypes from 'prop-types'
import { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

import { Container } from './Shape'

function Tab({ items, title, currentTabIndex }) {
  const [activeTabIndex, setActiveTabIndex] = useState(currentTabIndex)
  const [previousTabIndex, setPreviousTabIndex] = useState(null)

  const handleClickTab = (index) => {
    setPreviousTabIndex(activeTabIndex)
    setActiveTabIndex(index)
  }

  return (
    <>
      <h2>{title}</h2>
      <Container width='500px'>
        <TabList>
          {items.map((item, index) => (
            <TabItem
              key={item}
              index={index}
              previousTabIndex={previousTabIndex}
              isActive={activeTabIndex === index}
              onClick={() => handleClickTab(index)}
            >
              {item}
            </TabItem>
          ))}
        </TabList>
      </Container>
    </>
  )
}

Tab.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  currentTabIndex: PropTypes.number,
}

const TabList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`

const TabItem = styled.li`
  font-weight: bold;
  padding: 12px;
  text-align: center;
  width: 120px;
  cursor: pointer;
  position: relative;
  outline: none;
  color: gray;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  ${({ previousTabIndex, index, isActive }) =>
    isActive &&
    css`
      color: black;
      &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background: rgb(16, 175, 175);
        animation: ${slide(previousTabIndex, index)} 0.2s linear;
      }
    `}
`

const slide = (previousTabIndex, index) => keyframes`
  from {
    transform: translateX(${(previousTabIndex - index) * 100}%);
  }
  to {
    transform: translateX(0px);
  }
`

export default Tab
