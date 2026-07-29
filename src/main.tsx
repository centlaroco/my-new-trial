import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import '@/styles/global.css';
import HomePage from './pages/home';
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      
    </Routes>
  </BrowserRouter>,
)
