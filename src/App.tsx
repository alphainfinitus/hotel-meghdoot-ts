import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={ <Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
