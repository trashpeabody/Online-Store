import { Categories } from './generics/Categories'
import { Hero } from './home/Hero'
import { HighlightedItems } from './home/HighlightedItems'
import { AboutUs } from './generics/AboutUs'

export const Home = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <HighlightedItems />
      <AboutUs />
    </main>
  )
}
