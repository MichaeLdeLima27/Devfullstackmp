import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

function Navbar() {
  const [navActive, setNavActive] = useState(false)

  const toggleNav = () => setNavActive(!navActive)
  const closeMenu = () => setNavActive(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu() // <--- função chamada corretamente
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu() // <--- função chamada corretamente
    }
  }, [])

  return (
    <nav className={`navbar ${navActive ? 'active' : ''}`}>
      <div>
        <img
          src="/logoipsum-custom-logo-2.png"
          alt="Michael De Lima"
          className="navbar__logo1"
        />
      </div>
      <a className={`nav__hamburger ${navActive ? 'active' : ''}`} onClick={toggleNav}>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? 'active' : ''}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              Sobre mim
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="faq"
              className="navbar--content"
            >
              Informações
            </Link>
          </li>
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contato
      </Link>
    </nav>
  )
}

export default Navbar
