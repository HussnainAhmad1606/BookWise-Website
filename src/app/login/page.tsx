"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../css/page.module.css'
import HeroImg from '../public/hero.jpg'
import Stats from '@/components/Stats'
import { useEffect, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {



  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [isDisplay, setIsDisplay] = useState(false);

  const showAlert = (message:any, type:any) => {
    setAlertMessage(message);
    setAlertType(type)
    setIsDisplay(true);
    setTimeout(() => {
      setIsDisplay(false);
    }, 3000);
  }


  const login = () => {  
    setIsDisplay(true);
    showAlert("Logged In Successfully", "success")
    setTimeout(() => {
      setIsDisplay(false);
    }, 3000);
  }
  return (
   <>

   {/* Hero Section */}
   <div style={{display: !isDisplay?"none":""}} className="toast">
  <div className={`alert alert-${alertType}`}>
    <span>{alertMessage}</span>
  </div>
</div>
    <div className="hero min-h-screen" style={{
      backgroundImage:`linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(/login.jpg)`
      }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="my-10 text-5xl font-bold">Login</h1>
      <input type="email" placeholder="Enter Email..." className="input input-bordered input-primary w-full max-w-xs" />
      <input type="password" placeholder="Enter Password..." className="my-10 input input-bordered input-primary w-full max-w-xs" />
      <br/>
      <button onClick={login} className="btn btn-primary">Login</button>
    </div>
  </div>
</div>


   </>
  )
}
