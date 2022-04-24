import { useState } from 'react';
import styled, { css } from 'styled-components';

import { Container } from './Shape';

function Toggle({
  title,
  items,
  isDetail,
}) {
  const [isDetailSelected, setIsDetailSelected] = useState(isDetail);

  const handleClickToggle = () => {
    setIsDetailSelected(prev => !prev);
  };

  return (
    <>
      <h2>{title}</h2>
      <Container>
        <ToggleSelector>
          {items.map((item, index) => (
            <ToggleItem
              key={item}
              isSelected={isDetailSelected === Boolean(index)}
              onClick={handleClickToggle}
            >
              {item}
            </ToggleItem>
          ))}
          <Circle position={isDetailSelected} />
        </ToggleSelector>
      </Container>
    </>
  );
}

const ToggleSelector = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 300px;
  list-style: none;
  border-radius: 20px;
  background-color: rgb(235, 235, 235);
`;

const ToggleItem = styled.li`
  z-index: 100;
  padding: 8px;
  color: ${({ isSelected }) => isSelected ? 'black' : 'gray'}
`;

const Circle = styled.div`
  position: absolute;
  // TODO: 수치 수정
  top: 116px;
  left: 192px;
  background-color: white;
  width: 150px;
  height: 28px;
  border-radius: 20px;
  transition: all 0.2s linear;
  ${({ position }) =>
    position &&
    css`
      transform: translate(140px, 0);
      transition: all 0.2s linear;
    `}
`;

export default Toggle;
