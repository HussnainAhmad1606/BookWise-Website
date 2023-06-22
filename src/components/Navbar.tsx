import useUserStore from '@/store/store';
import Link from 'next/link';
import React, { useEffect } from 'react'
var jwt = require("jsonwebtoken")
function Navbar() {
  const avatar = useUserStore((state) => state.avatar);
  const username = useUserStore((state) => state.username);
  const setUsername = useUserStore((state) => state.setUsername);
  const setAvatar = useUserStore((state) => state.setAvatar);
  const setEmail = useUserStore((state) => state.setEmail);



  const alertType = useUserStore((state) => state.alertType)
  const alertMsg = useUserStore((state) => state.alertMessage)
  const isAlert = useUserStore((state) => state.isAlert)

  const setIsAlert = useUserStore(state => state.setIsAlert);
  const setAlertType = useUserStore(state => state.setAlertType);
  const setAlertMsg = useUserStore(state => state.setAlertMessage);
  const [isDisplay, setIsDisplay] = React.useState(false);


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
 

  const logOut = () => {
    localStorage.removeItem("token");
    setUsername("");
    setAvatar("");
    setEmail("");
    setAlertType("success");
    setAlertMsg("Logged out successfully");
    setIsAlert(true);
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const t = jwt.decode(token, process.env.JWT_TOKEN);
      console.log(t);
      if (t) {
        setUsername(t.username);
        setAvatar(t.avatar);
        setEmail(t.email);
      }
    }
  }, [])
  
  return (
    <>
    <div style={{display: !isDisplay?"none":""}} className="toast">
    <div className={`alert alert-${alertType}`}>
      <span>{alertMsg}</span>
    </div>
  </div>
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
        <li><a>Explore</a></li>
      <li><a>Trending</a></li>
      <li><a>Contact</a></li>
      <li><a>About</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">BookWise</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href={"/"}>Home</Link></li>
        <li><a>Explore</a></li>
      <li><a>Trending</a></li>
      <li><Link href={"/contact"}>Contact</Link></li>
      <li><a>About</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  {
    username==""?(
     <>
      <button className="btn btn-primary"><Link href={"/login"}>Login</Link></button>
  <button className="mx-2 btn btn-primary"><Link href={"/signup"}>Sign Up</Link></button>
     </>
    ):null
  }
 {
   username==""?null:(
   <>
    <p className="mx-2">Hi, {username}</p>
    <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img src={avatar==""?`https://ui-avatars.com/api/?name=${username[0]}`:avatar} />
      </div>
    </label>
    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      <li>
        <Link href={"/profile"} className="justify-between">
          Profile
          <span className="badge">New</span>
        </Link>
      </li>
      <li><a>Settings</a></li>
      <li><button onClick={logOut}>Logout</button></li>
    </ul>
    </div>
    </>
  )
 }
  </div>
</div>
    </>
  )
}

export default Navbar;

