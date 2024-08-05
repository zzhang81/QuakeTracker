import './index.less';
import TabView from '@/components/TabView';
import React from 'react';
import Welcome from '@/components/Welcome';
import { Layout } from 'antd';
import { ProjectState } from '@/managers/project';
import { useSnapshot } from '@umijs/max';
import Sider from '@/components/Sider';
import { ErrorBoundary } from '@ant-design/pro-components';
import { SIDER_WIDTH } from '@/constants/layout';

const HomePage: React.FC = () => {

  const snap = useSnapshot(ProjectState);

  return (
    <Layout>
      {snap.hasOpened &&
        <Layout.Sider width={`${SIDER_WIDTH}px`}>
          <ErrorBoundary>
            <Sider />
          </ErrorBoundary>
        </Layout.Sider>
      }
      <Layout.Content>
        <div>
          <Welcome />
          <ErrorBoundary>
            <TabView />
          </ErrorBoundary>
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default HomePage;
