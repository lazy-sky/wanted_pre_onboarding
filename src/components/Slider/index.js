import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useState } from 'react'

import { Container } from '../Shape'
import styles from './Slider.module.scss'

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
        <div className={styles.progressStatus}>
          <b>{slidePercent}</b>
          <span>%</span>
        </div>
        <div className={styles.progressContainer}>
          <input
            className={styles.progressBar}
            type='range'
            value={slidePercent}
            onChange={handleSlideProgress}
            style={{
              background: `linear-gradient(
        to right,
        rgb(16, 175, 175) 0%,
        rgb(16, 175, 175) ${slidePercent}%,
        #ebebeb ${slidePercent}%,
        #ebebeb 100%
      )`,
            }}
          />
          {basePoints.map((point) => (
            <div key={point} className={classnames(styles.progressDot, slidePercent >= point && styles.isFilled)} />
          ))}
        </div>
        <ul className={styles.basePoints}>
          {basePoints.map((point, index) => (
            <li key={point} index={index} value={point}>
              <button type='button' onClick={() => handleClickPoint(point)}>
                {point}%
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}

Slider.propTypes = {
  title: PropTypes.string,
  basePoints: PropTypes.arrayOf(PropTypes.number),
  currentValue: PropTypes.number,
}

export default Slider
