import Differentials from '@/components/Differentials'
import Hero from '@/components/Hero'
import styles from '@/styles/Home.module.css'
import { Manrope } from 'next/font/google'
import Head from 'next/head'

const manrope = Manrope({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>APX Invest BTG, PLATAFORMA CUSTO ZERO E O MELHOR ATENDIMENTO TRADER DO BRASIL</title>
      </Head>
      <div className={manrope.className}>
        <Hero />
        <Differentials />
      </div>
    </>
  )
}
