"use client"
import Image from 'next/image'
import styles from './page.module.css'
import LogIn from './log-in'
import { useSelector } from 'react-redux'
import Header from './components/header'

export default function Home() {

  const userName = useSelector((state)=>state.auth.value.userName);
  return (
    <>
     <Header/> jhkj
      <LogIn/>
      <h1>userName : {userName}</h1>
      
    </>
  )
}
