import logo from '../assets/shared/desktop/logo.svg'
import cart from '../assets/shared/desktop/icon-cart.svg'

export const Header = () => {
  return (
    <header>
      <div className='header container'>
        <a><img className='header__logo' src={logo} alt='' /></a>
        <nav>
          <a href='http://' target='_blank' rel='noopener noreferrer'>Home</a>
          <a href='http://' target='_blank' rel='noopener noreferrer'>Headphones</a>
          <a href='http://' target='_blank' rel='noopener noreferrer'>Speakers</a>
          <a href='http://' target='_blank' rel='noopener noreferrer'>Earphones</a>
        </nav>
        <button><img className='header__cart' src={cart} alt='' /></button>
      </div>
    </header>
  )
}
