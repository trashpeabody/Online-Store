import { Button } from '../generics/Button'

export const Hero = ({ product }) => {
  return (
    <section>
      <div className='container product-hero'>
        <picture>
          <source srcSet={product.image.mobile} media='(max-width: 768px)' />
          <source srcSet={product.image.tablet} media='(max-width: 1023px)' />
          <img src={product.image.desktop} alt='Guy using headphones' />
        </picture>
        <div className='product-hero__info'>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <span>{product.price}</span>
          <form>
            <input />
            <Button kind={1} />
          </form>
        </div>
      </div>
    </section>
  )
}
