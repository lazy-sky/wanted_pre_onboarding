import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components'

import { Container } from './Shape'

function Slider({ title, basePoints, currentValue }) {
  const [slidePercent, setSlidePercent] = useState(currentValue)

  const handleSlideProgress = (e) => {
    setSlidePercent(e.target.value)
  }

  const handleClickPoint = (point) => {
    setSlidePercent(point)
  }

  return (
    <>
      <h2>{title}</h2>
      <Container width='400px'>
        <ProgressStatus>
          <b>{slidePercent}</b>
          <span>%</span>
        </ProgressStatus>
        <ProgressContainer>
          <Progress type='range' value={slidePercent} onChange={handleSlideProgress} />
          {basePoints.map((point) => (
            <ProgressDot key={point} isFilled={slidePercent >= point} />
          ))}
        </ProgressContainer>
        <BasePoints>
          {basePoints.map((point, index) => (
            <button type='button' key={point} index={index} value={point} onClick={() => handleClickPoint(point)}>
              {point}%
            </button>
          ))}
        </BasePoints>
      </Container>
    </>
  )
}

Slider.propTypes = {
  title: PropTypes.string,
  basePoints: PropTypes.arrayOf(PropTypes.number),
  currentValue: PropTypes.number,
}

const ProgressStatus = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 16px;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: #f9f9f9;

  b {
    font-size: larger;
    margin-right: 24px;
  }

  span {
    color: gray;
  }
`

const ProgressContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Progress = styled.input`
  position: absolute;
  appearance: none;
  width: 100%;
  height: 4px;
  background: linear-gradient(
    to right,
    rgb(16, 175, 175) 0%,
    rgb(16, 175, 175) ${({ value }) => value}%,
    #ebebeb ${({ value }) => value}%,
    #ebebeb 100%
  );
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 24px;
    height: 24px;
    background-color: rgb(16, 175, 175);
    border: 4px solid white;
    border-radius: 100%;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  }

  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    background-color: rgb(16, 175, 175);
    border: 4px solid white;
    border-radius: 100%;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  }
`

const ProgressDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${({ isFilled }) => (isFilled ? 'rgb(16, 175, 175)' : '#ebebeb')};
`

const BasePoints = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  list-style: none;

  li {
    font-size: small;
    width: 40px;
    padding: 2px 4px;
    color: gray;
    background-color: #ebebeb;
    border-radius: 12px;
    text-align: center;
    cursor: pointer;

    &:hover {
      color: white;
      background-color: rgb(16, 175, 175);
    }
  }
`

export default Slider
