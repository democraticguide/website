import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Container from '@mui/material/Container'

import Home from './views/Home'
import Country from './views/Country'

import Footer from './components/Footer'
import Header from './components/Header'

export default function AppRouter () {
  return (
    <BrowserRouter>
      <Header />
      <Container sx={{ marginBlock: 12 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/country/:country' element={<Country />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}
