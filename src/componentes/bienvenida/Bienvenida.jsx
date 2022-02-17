import React from 'react'

import {
  AboutUs,
  Footer,
  Header,
  Laurels,
  SpecialMenu
} from './container'
import { Navbar } from './components'
import './Bienvenida.scss';

const Bienvenida = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Laurels />
    <Footer />
  </div>
)

export default Bienvenida
