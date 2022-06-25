import logo from '../assets/shared/desktop/logo.svg'
import cart from '../assets/shared/desktop/icon-cart.svg'
import earphonesImg from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import headphonesImg from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakersImg from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import { Link } from 'react-router-dom'
import { Category } from './generics/Category'
import { useState } from 'react'

export const Header = () => {
  const categories = [
    {
      id: 1,
      name: 'headphones',
      imgSrc: headphonesImg
    },
    {
      id: 2,
      name: 'speakers',
      imgSrc: speakersImg
    },
    {
      id: 3,
      name: 'earphones',
      imgSrc: earphonesImg
    }
  ]

  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    open
      ? document.body.style.overflow = 'auto'
      : document.body.style.overflow = 'hidden'
    setOpen(!open)
  }

  const closeMenu = () => {
    document.body.style.overflow = 'auto'
    setOpen(false)
  }

  return (
    <header className='container'>
      <div className='header'>
        <button className='burger' onClick={toggleMenu} />
        <Link onClick={closeMenu} to='/'><img className='header__logo' src={logo} alt='' /></Link>
        <nav>
          <ul className='header__nav--desktop'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/headphones'>Headphones</Link></li>
            <li><Link to='/speakers'>Speakers</Link></li>
            <li><Link to='/earphones'>Earphones</Link></li>
          </ul>
          {open
            ? <div onClick={() => console.log('clicked')} className='background-disabled'>
              <ul className='header__nav--tablet container'>
                {categories.map((category) => {
                  return <li key={category.id}><Category key={category.id} category={category} /></li>
                })}
              </ul>
            </div>
            : null}

        </nav>
        <button className='header__cart--button'><img className='header__cart' src={cart} alt='' /></button>
      </div>
    </header>
  )
}
