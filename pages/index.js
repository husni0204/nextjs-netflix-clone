import { useState } from 'react'
import FAQ from '../components/Pages/Home/FAQ'
import Features from '../components/Pages/Home/Features'
import Footer from '../components/Pages/Home/Footer'
import Header from '../components/Pages/Home/Header'
import LoginModal from '../components/Pages/Home/LoginModal'

export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Header OpenModal={()=>setOpen(true)} />
      <Features />
      <FAQ />
      <Footer />
      <LoginModal open={open} CloseModal={()=>setOpen(false)} />
    </>
  )
}
