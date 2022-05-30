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
import { Speakers } from './components/Speakers'

const root = ReactDOM.createRoot(
  document.getElementById('root')
)
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='speakers' element={<Speakers />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
