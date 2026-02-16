import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import ProjectDetails from './pages/ProjectDetails';
import CV from './pages/CV';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<AllProjects />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="cv" element={<CV />} />
          <Route path="contact" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
