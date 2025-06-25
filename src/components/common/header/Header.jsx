import React, { useState, useEffect } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const [navList, setNavList] = useState(false)
  const [scrolled, setScrolled] = useState(false)
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
              {nav.map((list, index) => (
                <li key={index}>
                  <Link 
                    to={list.path} 
                    className={location.pathname === list.path ? 'active' : ''}
                    onClick={closeMobileMenu}
                  >
                    {list.text}
                  </Link>
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
