import { Button } from '../generics/Button'

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
        <Button kind={1} />
      </div>
    </div>
  )
}
