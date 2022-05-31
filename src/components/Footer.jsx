import logo from '../assets/shared/desktop/logo.svg'
import facebook from '../assets/shared/desktop/icon-facebook.svg'
import twitter from '../assets/shared/desktop/icon-twitter.svg'
import instagram from '../assets/shared/desktop/icon-instagram.svg'

export const Footer = () => {
  return (
    <footer>
      <div className='container footer'>
        <img src={logo} />
        <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
        <span className='bold'>Copyright 2021. All Rights Reserved</span>
        <nav className='footer__nav'>
          <a href='http://' target='_blank' rel='noopener noreferrer'>Home</a>
          <a href='http://' target='_blank' rel='noopener noreferrer'>Headphones</a>
          <a href='http://' target='_blank' rel='noopener noreferrer'>Speakers</a>
          <a href='http://' target='_blank' rel='noopener noreferrer'>Earphones</a>
        </nav>
        <div className='footer__rrss'>
          <a href='http://' target='_blank' rel='noopener noreferrer'><img src={facebook} /></a>
          <a href='http://' target='_blank' rel='noopener noreferrer'><img src={twitter} /></a>
          <a href='http://' target='_blank' rel='noopener noreferrer'><img src={instagram} /></a>
        </div>
      </div>
    </footer>
  )
}
