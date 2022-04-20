import { useState } from 'react';
import styled, { css } from 'styled-components';

function Toggle() {
  const [selectedToggleIndex, setSelectedToggleIndex] = useState(0);

  const toggleItems = ['기본', '상세'];

  const handleClickToggle = () => {
    setSelectedToggleIndex((prev) => Number(!prev));
  };

  return (
    <>
      <h2>Toggle</h2>
      <ToggleSelector>
        <Circle position={selectedToggleIndex} />

        {toggleItems.map((item, index) => (
          <ToggleItem
            key={item}
            isSelected={selectedToggleIndex === index}
            onClick={handleClickToggle}
          >
            {item}
          </ToggleItem>
        ))}
      </ToggleSelector>
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
  color: gray;
  ${({ isSelected }) =>
    isSelected &&
    css`
      color: black;
    `}
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
