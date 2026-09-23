import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import '@/styles/global.css';
import Layout from '@/pages/guest/layyout';
import Homepage from '@/pages/guest/home';
import Aboutpage from '@/pages/guest/about';
import SkillsPage from '@/pages/guest/skills';
import ProjectPage from '@/pages/guest/projects';
import NotFoundPage from '@/components/common/notfound'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='/project' element={<ProjectPage />} />
      </Route>

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>,
);
