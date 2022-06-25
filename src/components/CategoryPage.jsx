import { Outlet } from 'react-router-dom'
import { Hero } from './categories/Hero'
import { Products } from './categories/Products'
import { AboutUs } from './generics/AboutUs'
import { Categories } from './generics/Categories.jsx'

export const CategoryPage = ({ name, data }) => {
  return (
    <main>
      <Hero name={name} />
      <Products data={data} />
      <Categories />
      <AboutUs />
      <Outlet />
    </main>
  )
}
