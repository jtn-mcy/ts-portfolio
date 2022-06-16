import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './styles/_global.scss';
import Layout from './layout';
import Socials from './components/Socials/Socials';
import Home from './pages/Home';
import About from './pages/About';
import ProjectPage from './pages/Project';
import Timeline from './pages/Timeline';
import { queryClient } from './api';
import { QueryClientProvider } from 'react-query';
import ProjectedContext from './context/selectedProject';

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProjectedContext>
      <Layout>
          <Socials />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} /> 
          <Route path='/projects/' element={<ProjectPage />}>
            <Route path=':projectId' element={<ProjectPage />} />
          </Route>
            <Route path='/timeline' element={<Timeline />} />
        </Routes>
      </Layout>
      </ProjectedContext>
    </QueryClientProvider>
  );
}

export default App;
