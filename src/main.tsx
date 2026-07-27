import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import '@/styles/global.css';
import HomePage from './pages/home';
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <HomePage />
  </BrowserRouter>,
)
