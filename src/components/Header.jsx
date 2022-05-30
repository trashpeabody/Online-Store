import logo from '../assets/shared/desktop/logo.svg'
import cart from '../assets/shared/desktop/icon-cart.svg'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <div className='header container'>
        <Link to='/'><img className='header__logo' src={logo} alt='' /></Link>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/headphones'>Headphones</Link>
          <Link to='/speakers'>Speakers</Link>
          <Link to='/earphones'>Earphones</Link>
        </nav>
        <button><img className='header__cart' src={cart} alt='' /></button>
      </div>
    </header>
  )
}
