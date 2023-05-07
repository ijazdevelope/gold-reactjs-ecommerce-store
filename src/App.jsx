import React from 'react'
import Hero from './components/Hero'
import { heroapi } from './data/Data'

const App = () => {
  return (
    <div className='bg'> 
      <main>
        <Hero heroapi={heroapi} />
      </main>
    </div>
  )
}

export default App
