import { useState } from 'react'
//import './App.css'
import Footer from './components/Footer'
import Section from './components/Section'
import Cargaproductos from './components/Cargaproductos'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
// <ItemListContainer titulo={"Este producto no existe"} texto={"Favor intente buscar otro"} />
//<Cargaproductos />
/*
    <BrowserRouter>
      <Navbar />
      <Section />
      <ItemListContainer />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
*/
  return (
    <BrowserRouter>
      <Navbar />
      <Section />
      <ItemListContainer />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App