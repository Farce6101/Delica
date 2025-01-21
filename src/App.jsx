import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header.jsx'
import Hero from './hero.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="hero-body">
        <Header />
        <Hero />
     </div>
    </>
  )
}

export default App
