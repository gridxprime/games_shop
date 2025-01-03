import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Homepage from './pages/Homepage'
import Games from './pages/Games'
import About from './pages/About'
import Contacts from './pages/Contacts'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<Homepage/>} />
          <Route path='games' element={<Games />}/>
          <Route path='about' element={<About/>}/>
          <Route path='contacts' element={<Contacts/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
