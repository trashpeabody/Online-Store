import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './components/Home'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './style.scss'
import { CategoryPage } from './components/CategoryPage'
import data from './data.json'
import { ProductPage } from './components/Productpage'

const categories = [
  {
    id: 1,
    name: 'headphones'
  },
  {
    id: 2,
    name: 'speakers'
  },
  {
    id: 3,
    name: 'earphones'
  }
]

const root = ReactDOM.createRoot(
  document.getElementById('root')
)
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      {categories.map(category => {
        const categoryData = data.filter((element) => element.category === category.name)
        return (
          <Route key={category.id} path={`/${category.name}`} element={<CategoryPage name={category.name} data={categoryData} />}>
            {data
              .filter(product => product.category === category.name)
              .map((product) => {
                return (
                  <Route key={product.id} path={`/${product.category}/${product.slug}`} element={<ProductPage product={product} />} />
                )
              })}
          </Route>
        )
      })}

    </Routes>
    <Footer />
  </BrowserRouter>
)
