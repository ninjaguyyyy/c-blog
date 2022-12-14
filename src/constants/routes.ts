import loadable from '@loadable/component';

import { RouteConfig } from 'models/configuration';

export const routes: RouteConfig[] = [
  {
    path: '/',
    component: loadable(() => import('components/pages/Home'))
  },
  {
    path: '/sign-in',
    component: loadable(() => import('components/pages/SignIn'))
  },
  {
    path: '/blogs',
    component: loadable(() => import('components/pages/Blogs'))
  },
  {
    path: '/profile',
    auth: true,
    component: loadable(() => import('components/pages/user/Profile'))
  }
];

export const ROUTE = {
  SIGN_IN: '/sign-in'
};
