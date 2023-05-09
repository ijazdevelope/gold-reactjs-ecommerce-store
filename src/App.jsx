import React from 'react';
import { Hero, Sales } from './components/Index'
import { heroapi, popularsales, toprateslaes } from './data/Data'

const App = () => {
  return (
    <> 
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <Sales endpoint={toprateslaes} />
      </main>
    </>
  )
}

export default App
