"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../css/page.module.css'
import HeroImg from '../public/hero.jpg'
import Stats from '@/components/Stats'
import { use, useEffect, useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '../../firebase/firebaseStorage'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const [imageFile, setImageFile] = useState({name:""});
  const [downloadURL, setDownloadURL] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [progressUpload, setProgressUpload] = useState(0);


  const [fileStatus, setFileStatus] = useState("")
  const handleSelectedFile = (files:any) => {

    if (files && files[0].size < 10000000) {
      setImageFile(files[0])

      console.log(files[0])
    } else {
      console.error('File size to large')
      setFileStatus("File size is too large");
    }
  }

  useEffect(() => {
    if (progressUpload === 100) {
      setFileStatus("Upload Complete")
    }
  
  }, [progressUpload])
  

  const handleUploadFile = () => {
    setIsUploading(true);
    if (imageFile) {
      const name = imageFile?.name;
      const storageRef = ref(storage, `videos/${name}`)
      
      //@ts-ignore
      const uploadTask = uploadBytesResumable(storageRef, imageFile)
      setFileStatus("Uploading...")
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100

          setProgressUpload(progress) // to show progress upload

          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          console.error(error.message)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            //url is download url of file
            setDownloadURL(url)
          })
        },
      )
    } else {
      console.error('File not found')
    }
  }
  return (
   <>

   {/* Hero Section */}
    <div className="hero min-h-screen" style={{
      backgroundImage:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(/hero.jpg)`
      }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Upload</h1>
      <input
       type="file"
       placeholder="Select file to upload"
       onChange={(files) => handleSelectedFile(files.target.files)}
      className="my-10 file-input file-input-bordered file-input-primary w-full max-w-xs" />
      <input defaultValue={downloadURL} type="text" placeholder="URL will show here..." className="input input-bordered mb-10 input-primary w-full max-w-xs" />
      <br/>
      <progress className="mb-10 progress progress-accent w-56" value={progressUpload} max="100"></progress>
      <br/>
      <p>{fileStatus} {isUploading?Math.floor(progressUpload)+"%":""}</p>
      <br/>
      <button onClick={handleUploadFile} className="btn btn-primary">Upload Now</button>
    </div>
  </div>
</div>

   </>
  )
}
