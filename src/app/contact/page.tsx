import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../css/page.module.css'
import HeroImg from '../public/hero.jpg'
import Stats from '@/components/Stats'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>

   {/* Hero Section */}
    <div className="hero min-h-screen" style={{
      backgroundImage:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(/hero.jpg)`
      }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
      <p className="mb-5">An online Community where you can learn & grow your skills</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>


{/* Stats */}
<Stats/>
   </>
  )
}
