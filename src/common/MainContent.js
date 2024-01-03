import React from 'react'
import Services from './Services'
import Nosotros from './Nosotros'
import Clients from './Clients'
import Contact from './Contact'
import MainBanner from './MainBanner'

export default function MainContent() {
  return (
    <>
      <MainBanner />
      <Nosotros />
      <Services />
      <Clients />
      <Contact />
    </>
  )
}
