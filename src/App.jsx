// import { useState } from 'react'
import PricingTable  from './components/Pricing'

import './App.css'

function App() {
  return (
    <>
      <PricingTable pricingLabel='Basic' buttonColor="red" />
      <PricingTable pricingLabel='Medium' buttonColor="green"/>
      <PricingTable pricingLabel='Premium' buttonColor="blue"/>
    </>
  )
}

export default App
