import { Button } from '../generics/Button'
import { Link } from 'react-router-dom'

export const Category = ({ category }) => {
  return (
    <div className='categories__item'>
      <img src={category.imgSrc} />
      <h6>{category.name}</h6>
      <Link to={`/${category.name}`}><Button kind={3} /></Link>
    </div>
  )
}
