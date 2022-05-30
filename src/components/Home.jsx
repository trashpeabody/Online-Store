import { Categories } from './Home/Categories'
import { Hero } from './Home/Hero'
import { HighlightedItems } from './Home/HighlightedItems'
import { AboutUs } from './Home/AboutUs'

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
