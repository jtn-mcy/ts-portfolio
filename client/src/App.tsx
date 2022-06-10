import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './styles/_global.scss';
import Layout from './layout';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Home from './pages/Home';
import About from './pages/About';
import ProjectPage from './pages/Projects';
import { queryClient } from './api';
import { QueryClientProvider } from 'react-query';

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
