import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../css/page.module.css'
import HeroImg from '../public/hero.jpg'
import Stats from '@/components/Stats'
const inter = Inter({ subsets: ['latin'] })
import "../../css/animations.css"
import Link from 'next/link';
export default function Home() {

 return (
   <>

   {/* Hero Section */}
    <div className="signup hero min-h-screen" style={{
      backgroundImage:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(/signup.jpg)`
      }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    <h1 className="my-10 text-5xl font-bold">Create An Account</h1>
      <input type="email" placeholder="Enter Email..." className="input input-bordered input-primary w-full max-w-xs" />
      <input type="password" placeholder="Enter Username..." className="my-10 input input-bordered input-primary w-full max-w-xs" />
      <input type="password" placeholder="Enter Password..." className="mb-10 input input-bordered input-primary w-full max-w-xs" />
      <br/>
      <button className="btn btn-primary">Create Account</button>
    </div>
  </div>
</div>


   </>
  )
}
