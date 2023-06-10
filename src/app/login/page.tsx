"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../css/page.module.css'
import HeroImg from '../public/hero.jpg'
import Stats from '@/components/Stats'
import { useEffect, useState } from 'react';
import useUserStore from "../../store/store"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {




  const [isDisplay, setIsDisplay] = useState(false);


  const username = useUserStore((state) => state.username)
  const alertType = useUserStore((state) => state.alertType)
  const alertMsg = useUserStore((state) => state.alertMessage)
  const isAlert = useUserStore((state) => state.isAlert)

  const setIsAlert = useUserStore(state => state.setIsAlert);
  const setAlertType = useUserStore(state => state.setAlertType);
  const setAlertMsg = useUserStore(state => state.setAlertMessage);


  const [emailForm, setEmailForm] = useState("");
  const [passwordForm, setPasswordForm] = useState("");

  useEffect(() => {
    showAlert();
  }, [isAlert])
  
  const showAlert = () => {

   if (isAlert) {
    setIsDisplay(true);
    setTimeout(() => {
      setIsDisplay(false);
    }, 5000);

    setIsAlert(false);
   }
  }



  const login = () => {
    const data = {

      email: emailForm,
      password: passwordForm,
    }

    fetch(`${process.env.NEXT_PUBLIC_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      setAlertType(data.type);
      setAlertMsg(data.message);
      setIsAlert(true);
    })

  }


  return (
   <>
 

   {/* Hero Section */}
   <div style={{display: !isDisplay?"none":""}} className="toast">
  <div className={`alert alert-${alertType}`}>
    <span>{alertMsg}</span>
  </div>
</div>


    <div className="hero min-h-screen" style={{
      backgroundImage:`linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(/login.jpg)`
      }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="my-10 text-5xl font-bold">Login</h1>
 
      <input value={emailForm} onChange={(e)=> setEmailForm(e.target.value)} type="email" placeholder="Enter Email..." className="input input-bordered input-primary w-full max-w-xs" />
      <input value={passwordForm} onChange={(e)=> setPasswordForm(e.target.value)} type="password" placeholder="Enter Password..." className="my-10 input input-bordered input-primary w-full max-w-xs" />
      <br/>
      <button onClick={login} className="btn btn-primary">Login</button>
    </div>
  </div>
</div>


   </>
  )
}

