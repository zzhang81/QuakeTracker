import { RuntimeAntdConfig } from '@@/plugin-antd/types';
import Header from '@/components/Header';
import { HEADER_HEIGHT } from '@/constants/layout';

export async function getInitialState(): Promise<{ name: string }> {
  return { name: '' };
}


export const antd: RuntimeAntdConfig = (memo) => {
  memo.theme ??= {
    'token': {
      'colorPrimary': '#c8102e',
      'colorInfo': '#c8102e',
      'borderRadius': 2,
      'wireframe': false,
      'sizeStep': 4,
    },
    'components': {
      'Button': {
        'algorithm': true,
      },
    },
  };
  return memo;
};

export const layout = () => {
  return {
    logo: <img src={require('@/assets/uhxfrac.png')} alt="UHXfrac" style={{ width: 32 }} />,
    disableMobile: true,
    headerRender: () => <Header />,
    layout: 'top',
    token: {
      header: {
        heightLayoutHeader: HEADER_HEIGHT,
      },
    },
    contentStyle:{
      padding: 0,
    }
  };
};
