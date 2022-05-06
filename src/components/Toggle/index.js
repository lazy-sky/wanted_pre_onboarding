import PropTypes from 'prop-types'
import { useState } from 'react'
import styled, { css } from 'styled-components'

import { Container } from '../Shape'

function Toggle({ title, items, isDetail }) {
  const [isDetailSelected, setIsDetailSelected] = useState(isDetail)

  const handleClickToggle = () => {
    setIsDetailSelected((prev) => !prev)
  }

  return (
    <>
      <h2>{title}</h2>
      <Container>
        <ToggleSelector>
          {items.map((item, index) => (
            <ToggleItem key={item} isSelected={isDetailSelected === Boolean(index)} onClick={handleClickToggle}>
              {item}
            </ToggleItem>
          ))}
          <FocusCircle position={isDetailSelected} />
        </ToggleSelector>
      </Container>
    </>
  )
}

Toggle.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  isDetail: PropTypes.bool,
}

const ToggleSelector = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-around;
  list-style: none;
  border-radius: 20px;
  background-color: rgb(235, 235, 235);
  cursor: pointer;
`

const ToggleItem = styled.li`
  z-index: 100;
  padding: 8px;
  color: ${({ isSelected }) => (isSelected ? 'black' : 'gray')};
`

const FocusCircle = styled.div`
  position: absolute;
  top: 4px;
  left: 8px;
  background-color: white;
  width: 142px;
  height: 28px;
  border-radius: 20px;
  transition: all 0.2s linear;
  ${({ position }) =>
    position &&
    css`
      transform: translate(142px, 0);
      transition: all 0.2s linear;
    `}
`

export default Toggle
