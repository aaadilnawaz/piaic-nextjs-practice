import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.tcontainer}> <h1> Asalam o Aliekum! PIAIC from Adil Nawaz </h1> </div>
  )
}
