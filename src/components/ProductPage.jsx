import { AboutUs } from './generics/AboutUs'
import { Categories } from './generics/Categories'
import { Hero } from './product/Hero'

export const ProductPage = ({ product }) => {
  console.log(product)
  return (
    <main>
      <Hero product={product} />
      <Categories />
      <AboutUs />
    </main>
  )
}
