import Features from './components/home/Features'
import AboutTours from './components/home/AboutTours'
import Landing from './components/home/Landing'
import Image from 'next/image'
import Tours from './components/home/Tours'
import Storis from './components/home/Storis'
import Auth from './components/home/Auth'
import Footer from './components/utils/Footer'
export default function Home() {
  return (
    <main className='main'>
      <Landing/>
      <AboutTours/>
      <Features/>
      <Tours/>
      <Storis/>
      <Auth/>
      <Footer/>
    </main>
  )
}
