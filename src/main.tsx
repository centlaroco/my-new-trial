import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import '@/styles/global.css';

import Layout from "@/pages/guest/layyout"
import Homepage from "@/pages/guest/home"
import Aboutpage from "@/pages/guest/about";




createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Homepage />} />
      <Route path='/about' element={<Aboutpage/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
