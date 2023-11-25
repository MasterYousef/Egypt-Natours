import Features from './components/home/Features'
import AboutTours from './components/home/AboutTours'
import Landing from './components/home/Landing'
import Image from 'next/image'
import Tours from './components/home/Tours'
import Storis from './components/home/Storis'
import Auth from './components/home/Auth'
import GetUserDataLogic from './logic/GetUserDataLogic'
 async function Home() {
  const profile = await GetUserDataLogic()
  return (
    <main className='main'>
      <Landing/>
      <AboutTours/>
      <Features/>
      <Tours/>
      {
        profile ? (<Storis/>):null
      }
      {
        profile ? null:(<Auth/>)
      }
    </main>
  )
}
export default Home
