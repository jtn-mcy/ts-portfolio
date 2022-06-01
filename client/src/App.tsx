import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './styles/_global.scss';
import { PageHeader } from 'antd';
import Layout from './layout';
import Breadcrumbs from './components/Breadcrumbs';
import Home from './pages/Home';
import About from './pages/About';
import { queryClient } from './api';
import { QueryClientProvider } from 'react-query';

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Breadcrumbs params={[
          //getParams here
        ]} />
        <PageHeader title='PORTFOLIO' >
        </PageHeader>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
