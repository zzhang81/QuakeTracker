import React from 'react';
import { Tabs } from 'antd';
import { useModel } from '@umijs/max';
import { HEADER_HEIGHT } from '@/constants/layout';
import { RenderTabView } from '@/components/TabView/render';
import { ErrorBoundary } from '@ant-design/pro-components';

export default function TabView() {
  const { activeTab, tabs, selectTab, closeTab } = useModel('tabs');
  if (activeTab === -1) {
    return <></>;
  }
  return <div>
    <Tabs
      size="small"
      hideAdd
      tabBarStyle={{ margin: 0 }}
      activeKey={activeTab.toString()}
      type="editable-card"
      items={tabs.map((tab, index) => {
        return {
          key: index.toString(),
          label: tab.title,
        };
      })}
      onEdit={(key, action) => {
        if (action === 'remove') {
          if (typeof key === 'string') {
            closeTab(parseInt(key));
          }
        }
      }}
      onTabClick={(key) => {
        selectTab(parseInt(key));
      }}
    />
    <div style={{ height: `calc(100vh - ${HEADER_HEIGHT + 36}px)`, overflow: 'scroll' }}>
      <ErrorBoundary>
        <RenderTabView tab={tabs[activeTab]}></RenderTabView>
      </ErrorBoundary>
    </div>
  </div>;
}
