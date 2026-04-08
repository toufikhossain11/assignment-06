
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


function App() {
  const [countNumber, setcountNumber]= useState([])
  console.log(countNumber)

  return (
      <>
        <Navbar countNumber={countNumber}></Navbar>
        <Hero/>
        <Linebar/>
        <Cardsection Datas={datas} setcountNumber={setcountNumber} countNumber={countNumber}/>
        <StartSection/>
        <PricingCard/>
        <Workflow/>
        <Footer/>
      </>

  )
}

export default App
