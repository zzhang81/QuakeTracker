import { SetStateAction, useState } from 'react';


export type TabPageKindType = 'empty' | 'wizard' | 'project_config';

export type TabPageType = {
  title: string;
  data: any;
  closable?: boolean;
  kind: TabPageKindType;
}

type AddTabParam = {
  kind: TabPageKindType;
  title: string;
  param: any;
}


export default function() {
  const [activeTab, setActiveTab] = useState(-1);
  const [tabs, setTabs] = useState<TabPageType[]>([]);


  const addTab = (prop: AddTabParam) => {

    const tab: TabPageType = {
      title: prop.title,
      data: prop.param,
      kind: prop.kind,
      closable: true,
    };

    setTabs([...tabs, tab]);
    setActiveTab(tabs.length);
  };

  const selectTab = (index: SetStateAction<number>) => {
    setActiveTab(index);
  };

  const getActiveTab = () => {
    return tabs[activeTab];
  };

  const closeTab = (index: number) => {
    setTabs(tabs.filter((tab, i) => i !== index));
    if (index === activeTab) {
      setActiveTab(-1);
    } else if (index < activeTab) {
      setActiveTab(activeTab - 1);
    }
  };

  const closeCurrentTab = () => {
    if (activeTab >= 0) {
      closeTab(activeTab);
    }
  };

  return { activeTab, tabs, addTab, selectTab, getActiveTab, closeTab, closeCurrentTab };
}