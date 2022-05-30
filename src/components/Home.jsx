import { Categories } from './home/Categories'
import { Hero } from './home/Hero'
import { HighlightedItems } from './home/HighlightedItems'
import { AboutUs } from './home/AboutUs'

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
