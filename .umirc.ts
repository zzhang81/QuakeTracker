import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
    configProvider: {},
  },
  valtio: {},
  model: {},
  initialState: {},
  request: {},
  tailwindcss: {},
  layout: {
  },
  locale: {
    default: 'en-US',
    antd: true,
    title: true,
    baseNavigator: true,
  },
  theme: {
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
  },
  plugins: [],
  routes: [
    {
      path: '/',
      redirect: '/Home',
    },
    {
      name: 'Home',
      path: '/Home',
      component: './Home',
      hideInMenu: true,
    },
  ],
  npmClient: 'pnpm',
});
