import { Product } from './Product'

export const Products = ({ data }) => {
  return (
    <section className='products'>
      {data
        .sort((x, y) => {
          return (x === y) ? 0 : x ? -1 : 1
        })
        .map((product) => {
          return <Product key={product.id} product={product} />
        })}
    </section>
  )
}
