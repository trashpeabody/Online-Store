import { Button } from '../generics/Button'
import { Link } from 'react-router-dom'

export const Product = ({ product }) => {
  return (
    <div className='products__container container'>
      <img src={product.image.desktop} />
      <div className='products__info'>
        {(product.new)
          ? <span className='overline orange'>New product</span>
          : null}
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <Link to={`/${product.category}/${product.slug}`}><Button kind={1} /></Link>
      </div>
    </div>
  )
}
