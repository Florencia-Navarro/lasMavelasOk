import { useState, useEffect } from 'react'
import './App.css'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Home from './components/Home'
import QuienesSomos from './components/QuienesSomos'
import Contacto from './components/Contacto'
import Productos from './components/Productos'


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])


  return (
    < >
      {loading ? (<Loading />) : (<>
      <Navbar />
      <Home />
      <QuienesSomos />
      <Productos />
      <Contacto />
      </>)
      }
    </>
  )
}

export default App

