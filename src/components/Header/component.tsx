import React from 'react';
import { ConfigProvider, Menu } from 'antd';
import MenuActions, { ToolsType } from '@/components/Header/actions';
import { useModel } from '@umijs/max';
import { HEADER_HEIGHT } from '@/constants/layout';

export default function Header() {

  const { addTab } = useModel('tabs');

  const tools: ToolsType = {
    addTab,
  };

  return <ConfigProvider
    theme={{
      components: {
        Menu: {
          itemHeight: HEADER_HEIGHT,
        },
      },
    }}
  >
    <Menu mode="horizontal" selectable={false}>
      <Menu.SubMenu key="file" title="File" popupOffset={[-6, -8]}>
        <Menu.Item key="new_project" onClick={MenuActions.newProject(tools)}>New Project</Menu.Item>
        <Menu.Item key="new_file">New File</Menu.Item>
        <Menu.Item key="new_windows" onClick={MenuActions.newWindows}>New Windows</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="open_file">Open File</Menu.Item>
        <Menu.Item key="open_project" onClick={MenuActions.openProject(tools)}>Open Project</Menu.Item>
        <Menu.Item key="open_recent">Open Recent</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="preference">Preference</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="Exit" onClick={MenuActions.exit}>Exit</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="edit" title="Edit" popupOffset={[-6, -8]}>
        <Menu.Item key="undo">Undo</Menu.Item>
        <Menu.Item key="redo">Redo</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="cut">Cut</Menu.Item>
        <Menu.Item key="copy">Copy</Menu.Item>
        <Menu.Item key="paste">Paste</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="find">Find</Menu.Item>
        <Menu.Item key="replace">Replace</Menu.Item>
        <Menu.Item key="go_to">Go to</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="format">Format</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="view" title="View" popupOffset={[-6, -8]}>
        <Menu.Item key="toggle_sidebar">Toggle Sidebar</Menu.Item>
        <Menu.Item key="toggle_statusbar">Toggle Statusbar</Menu.Item>
        <Menu.Item key="toggle_toolbar">Toggle Toolbar</Menu.Item>
        <Menu.Item key="toggle_fullscreen">Toggle Fullscreen</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="zoom_in">Zoom In</Menu.Item>
        <Menu.Item key="zoom_out">Zoom Out</Menu.Item>
        <Menu.Item key="reset_zoom">Reset Zoom</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="toggle_panel">Toggle Panel</Menu.Item>
        <Menu.Item key="toggle_terminal">Toggle Terminal</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="help" title="Help" popupOffset={[-6, -8]}>
        <Menu.Item key="2">Check for updates</Menu.Item>
        <Menu.Item key="3">About</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  </ConfigProvider>;
}
