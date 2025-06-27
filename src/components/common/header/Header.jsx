import React, { useState, useEffect } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const [navList, setNavList] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownIndex, setDropdownIndex] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setNavList(false)
    setDropdownIndex(null)
  }

  // Handle dropdown open/close for mobile
  const handleDropdownClick = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index)
  }

  return (
    <>
      <header className={scrolled ? 'scrolled' : ''}>
        <div className='container'>
          <div className='logo'>
            <img src='./images/logo.png' alt='Fanikisha Ventures' />
          </div>
          
          <div className={`nav ${navList ? 'active' : ''}`}>
            <ul>
              {nav.map((item, index) => (
                <li
                  key={index}
                  className={item.dropdown ? 'has-dropdown' : ''}
                  onMouseEnter={() => window.innerWidth > 768 && item.dropdown && setDropdownIndex(index)}
                  onMouseLeave={() => window.innerWidth > 768 && item.dropdown && setDropdownIndex(null)}
                >
                  <Link
                    to={item.path}
                    className={location.pathname === item.path ? 'active' : ''}
                    onClick={closeMobileMenu}
                  >
                    {item.text}
                    {item.dropdown && <span className='dropdown-arrow'>&#9662;</span>}
                  </Link>
                  {item.dropdown && (
                    <ul
                      className={`dropdown-menu${dropdownIndex === index ? ' show' : ''}`}
                      style={{ display: dropdownIndex === index ? 'block' : undefined }}
                    >
                      {item.dropdown.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            to={sub.path}
                            className={location.pathname === sub.path ? 'active' : ''}
                            onClick={closeMobileMenu}
                          >
                            {sub.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* Mobile tap to open dropdown */}
                  {item.dropdown && (
                    <button
                      className='dropdown-toggle-btn'
                      onClick={() => handleDropdownClick(index)}
                      tabIndex={-1}
                    >
                      <span className='dropdown-arrow'>&#9662;</span>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className='button'>
            <button className="btn-primary">
              <i className='fa fa-phone'></i>
              Contact Us
            </button>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>
              {navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
