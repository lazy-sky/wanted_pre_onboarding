import PropTypes from 'prop-types'
import { useState } from 'react'

import { Container } from '../Shape'
import styles from './Dropdown.module.scss'

function Dropdown({ title, items, currentItem }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedText, setSelectedText] = useState(currentItem)
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState(items)

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  const handleChangeSearchText = (e) => {
    const {
      target: { value },
    } = e
    setSearchText(value)
    setSearchResults(items.filter((item) => item.toLowerCase().includes(value)))
  }

  const handleClickSearchResult = (text) => {
    setSelectedText(text)
    setIsDropdownOpen(false)
  }

  return (
    <>
      <h2>{title}</h2>
      <Container backgroundColor='#fcfcfc'>
        <button type='button' className={styles.dropdownMenu} onClick={handleToggleDropdown}>
          <div>{selectedText}</div>
          <img src='/images/caret-down.svg' alt='드롭다운' />
        </button>
        {isDropdownOpen && (
          <ul className={styles.searchContainer}>
            <div className={styles.searchBar}>
              <input placeholder='Search Symbol' value={searchText} onChange={handleChangeSearchText} />
              <img src='/images/magnifying-glass.svg' alt='검색' />
            </div>
            {searchResults.map((item) => (
              <li className={styles.searchItem} key={item}>
                <button type='button' onClick={() => handleClickSearchResult(item)}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  currentItem: PropTypes.string,
}

export default Dropdown
