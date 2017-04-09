import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import noop from 'nop'
import {Link} from 'react-router-dom'

import './styles.css'

import Icon from '../Icon'
import SearchBar from '../SearchBar'

export const SEARCH = 'SEARCH'

export default function NavBar (props) {
  const {
    sections, currentSection, searchQuery,
    onChangeSection, onChangeSearchQuery,
  } = props

  const searchBar = (
    <SearchBar
      key={SEARCH}
      className={classNames({
        'NavBar-section-item': true,
        'NavBar-section-item-selected': currentSection === SEARCH,
      })}
      query={searchQuery}
      onClick={() => onChangeSection(SEARCH)}
      onChange={onChangeSearchQuery}
    />
  )

  return (
    <header className='NavBar'>
      <nav className='NavBar-section-list'>
        {sections.map((section) => {
          if (section === SEARCH) {
            return searchBar
          }
          return (
            <button
              key={section}
              className={classNames({
                'NavBar-section-item': true,
                'NavBar-section-item-selected': section === currentSection,
              })}
              onMouseDown={() => onChangeSection(section)}
            >
              {section}
            </button>
          )
        })}
      </nav>
      <nav className='NavBar-section-list'>
        <button className='NavBar-dropdown-button'>
          <span className='NavBar-dropdown-label'>
            Date Added
          </span>
          <Icon icon='down-dir' className='NavBar-dropdown-icon' />
        </button>
        <Link to='/settings' className='NavBar-section-item'>
          <Icon icon='cog' />
        </Link>
      </nav>
    </header>
  )
}

NavBar.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentSection: PropTypes.string,
  searchQuery: PropTypes.string,
  onChangeSection: PropTypes.func,
  onChangeSearchQuery: PropTypes.func,
}

NavBar.defaultProps = {
  onChangeSection: noop,
  onChangeSearchQuery: noop,
}
