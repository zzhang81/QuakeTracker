import React from 'react';
import { useModel } from '@umijs/max';

export default function Welcome() {

  const { activeTab } = useModel('tabs');

  if (activeTab !== -1) {
    return <></>;
  }

  return <div className="p-16">
    <div className="font-semibold text-2xl">Welcome</div>
  </div>;
}
