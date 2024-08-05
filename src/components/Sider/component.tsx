import React from 'react';

import { BarChartOutlined, GlobalOutlined, HomeOutlined } from '@ant-design/icons';
import { ConfigProvider, Menu } from 'antd';
import { HEADER_HEIGHT } from '@/constants/layout';
import { useModel } from '@umijs/max';
import { ProjectState } from '@/managers/project';


export default function Sider() {

  const { addTab } = useModel('tabs');

  const startPageButton = () => {
    addTab({
      kind: 'project_config',
      title: 'Start Page',
      param: ProjectState.config,
    });
  };


  return (
    <div
      style={{
        backgroundColor: 'white',
        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
      }}>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              iconMarginInlineEnd: 0,
              activeBarBorderWidth: 0,
              activeBarHeight: 0,
              itemMarginInline: 1,
            },
          },
        }}
      >
        <Menu selectable={false}>
          <Menu.Item key="1" icon={<HomeOutlined />} title="Start" onClick={startPageButton}></Menu.Item>
          <Menu.Item key="1" icon={<BarChartOutlined />} title="Waveform"></Menu.Item>
          <Menu.Item key="1" icon={<GlobalOutlined />} title="Map"></Menu.Item>
        </Menu>
      </ConfigProvider>
    </div>
  );
}
