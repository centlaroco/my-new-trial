import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import '@/styles/global.css';
import HomePage from '@/pages/home.tsx';
import About from '@/pages/about.tsx';



createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/about' element={<About/>} />
      
    </Routes>
  </BrowserRouter>,
)
