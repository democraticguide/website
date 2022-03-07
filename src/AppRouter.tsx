import React from 'react'

import { HashRouter, Route, Routes } from 'react-router-dom'

import Container from '@mui/material/Container'

import Home from './views/Home'
import Country from './views/Country'

import Footer from './components/Footer'
import Header from './components/Header'

export default function AppRouter () {
  return (
    <HashRouter>
      <Header />
      <Container sx={{ marginBlock: 12 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/country/:country' element={<Country />} />
        </Routes>
      </Container>
      <Footer />
    </HashRouter>
  )
}
