import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {
  const [navActive, setNavActive] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleNav = () => setNavActive(!navActive)
  const closeMenu = () => setNavActive(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) closeMenu()
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${navActive ? 'active' : ''}`}>
      <div className="navbar__logo">
        <img src="/logoipsum-custom-logo-2.png" alt="Michael De Lima" />
      </div>

      <button className={`nav__hamburger ${navActive ? 'active' : ''}`} onClick={toggleNav}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      <div className={`navbar--items ${navActive ? 'active' : ''}`}>
        <ul>
          <li>
            <Link onClick={closeMenu} spy smooth offset={-70} duration={500} to="heroSection">
              Início
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} spy smooth offset={-70} duration={500} to="MyPortfolio">
              Serviços
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} spy smooth offset={-70} duration={500} to="AboutMe">
              Sobre mim
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} spy smooth offset={-70} duration={500} to="faq">
              Informações
            </Link>
          </li>
        </ul>
      </div>

      <Link
        onClick={closeMenu}
        spy
        smooth
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
