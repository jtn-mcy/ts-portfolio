import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './styles/_global.scss';
import { PageHeader } from 'antd';
import Layout from './layout';
import Breadcrumbs from './components/Breadcrumbs';

const App: React.FC = () => {
  return (
    <Layout>
      <Breadcrumbs params={[
        //getParams here
      ]} />
      <PageHeader title='PORTFOLIO' >
      </PageHeader>

      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
