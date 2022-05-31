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
import { CategoriesPage } from './components/Categories'
import data from './data.json'

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
        return (<Route key={category.id} path={`/${category.name}`} element={<CategoriesPage name={category.name} data={categoryData} />} />)
      })}
    </Routes>
    <Footer />
  </BrowserRouter>
)
