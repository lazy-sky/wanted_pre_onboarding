import classNames from 'classnames'
import PropTypes from 'prop-types'
import { useState } from 'react'

import { Container } from '../Shape'
import styles from './Tab.module.scss'

function Tab({ items, title, currentTabIndex }) {
  const [activeTabIndex, setActiveTabIndex] = useState(currentTabIndex)

  const handleClickTab = (index) => {
    setActiveTabIndex(index)
  }

  return (
    <>
      <h2>{title}</h2>
      <Container width='500px'>
        <ul className={styles.tabList}>
          {items.map((item, index) => (
            <li
              className={classNames(styles.tabItem, activeTabIndex === index && styles.active)}
              key={item}
              index={index}
            >
              <button type='button' onClick={() => handleClickTab(index)}>
                {item}
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}

Tab.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  currentTabIndex: PropTypes.number,
}

export default Tab
