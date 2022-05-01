import React from 'react';
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
    </Layout>
  );
}

export default App;
