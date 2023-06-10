"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../css/page.module.css'
import HeroImg from '../public/hero.jpg'
import Stats from '@/components/Stats'
const inter = Inter({ subsets: ['latin'] })
import "../../css/animations.css"
import Link from 'next/link';
import useUserStore from "../../store/store"

import { useRouter } from 'next/navigation'
import { useState } from 'react'
export default function Home() {

  const username = useUserStore((state) => state.username);
  const updateUsername = useUserStore(state => state.setUsername);
  const setAlertType = useUserStore(state => state.setAlertType);
  const setAlertMsg = useUserStore(state => state.setAlertMessage);
  const setIsAlert = useUserStore(state => state.setIsAlert);

  const [usernameForm, setUsernameForm] = useState("");
  const [emailForm, setEmailForm] = useState("");
  const [passwordForm, setPasswordForm] = useState("");

const router = useRouter();

  const createAccount = () => {
    const data = {
      username: usernameForm,
      email: emailForm,
      password: passwordForm,
      isAdmin: false,
      isBlocked: false,
      avatar: "https://i.imgur.com/7yPHh8M.png"
    }

    fetch(`${process.env.NEXT_PUBLIC_URL}/api/auth/signup`, {
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
      router.push("/login");
    })

  


  }

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
    <p>{username}</p>
      <input value={emailForm} onChange={(e)=>setEmailForm(e.target.value)} type="email" placeholder="Enter Email..." className="input input-bordered input-primary w-full max-w-xs" />
      <input  value={usernameForm} onChange={(e)=>setUsernameForm(e.target.value)} type="text" placeholder="Enter Username..." className="my-10 input input-bordered input-primary w-full max-w-xs" />
      <input  value={passwordForm} onChange={(e)=>setPasswordForm(e.target.value)} type="password" placeholder="Enter Password..." className="mb-10 input input-bordered input-primary w-full max-w-xs" />
      <br/>
      <button onClick={createAccount} className="btn btn-primary">Create Account</button>
    </div>
  </div>
</div>


   </>
  )
}
