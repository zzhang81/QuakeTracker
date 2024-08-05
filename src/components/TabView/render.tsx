import React from 'react';
import { TabPageType } from '@/models/tabs';
import Empty from '@/components/TabPages/Empty';
import Wizard from '@/components/TabPages/Wizard';
import StartUp from '@/components/TabPages/Project/StartUp';

type RenderTabViewProps = {
  tab: TabPageType
};

export const RenderTabView: React.FC<RenderTabViewProps> = ({ tab }) => {

  switch (tab.kind) {
    case 'empty':
      return <Empty></Empty>;

    case 'wizard':
      return <Wizard></Wizard>;

    case 'project_config':
      return <StartUp config={tab.data}></StartUp>;

    default:
      return <div>Not implemented</div>;
  }

};