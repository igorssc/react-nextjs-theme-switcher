import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import Logo from '../assets/next-js.svg'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <Logo />

      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Igor Santos.</p>
    </Container>
  )
}

export default Home
