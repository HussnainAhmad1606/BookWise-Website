import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../css/page.module.css'
import HeroImg from '../public/hero.jpg'
import Stats from '@/components/Stats'
const inter = Inter({ subsets: ['latin'] })
import Profile from '@/components/Profile';
export default function Home() {
  return (
   <>
<Profile/>
   </>
  )
}
