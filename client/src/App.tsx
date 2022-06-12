import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './styles/_global.scss';
import Layout from './layout';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Home from './pages/Home';
import About from './pages/About';
import ProjectPage from './pages/Project';
import { queryClient } from './api';
import { QueryClientProvider } from 'react-query';
import ProjectedContext from './context/selectedProject';

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProjectedContext>
      <Layout>
        <Breadcrumbs params={[
          //getParams here
        ]} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} /> 
          <Route path='/projects/' element={<ProjectPage />}>
            <Route path=':projectId' element={<ProjectPage />} />
          </Route>
        </Routes>
      </Layout>
      </ProjectedContext>
    </QueryClientProvider>
  );
}

export default App;
