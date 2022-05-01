import React from 'react';
import './styles/_global.scss';
import { PageHeader } from 'antd';
import Layout from './layout';

const App: React.FC = () => {
  return (
    <Layout>
      <PageHeader title='PORTFOLIO' >
      </PageHeader>
    </Layout>
  );
}

export default App;
