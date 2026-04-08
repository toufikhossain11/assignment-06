
import { useState } from 'react'
import './App.css'
import Cardsection from './component/Cardsection'
import Footer from './component/Footer'
import Hero from './component/Hero'
import Linebar from './component/Linebar'
import Navbar from './component/Navbar'
import PricingCard from './component/PricingCard'
import StartSection from './component/StartSection'
import Workflow from './component/Workflow'

const datas = fetch('/Data.json').then(res=>res.json())

// const [countNumber, setcountNumber]= useState(0)

function App() {

  return (
      <>
        <Navbar></Navbar>
        <Hero/>
        <Linebar/>
        <Cardsection Datas={datas}/>
        <StartSection/>
        <PricingCard/>
        <Workflow/>
        <Footer/>
      </>

  )
}

export default App
