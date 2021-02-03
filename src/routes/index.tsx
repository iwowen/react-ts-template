import { RouteConfig } from 'react-router-config';
import MainLayout from '@/layouts/MainLayout';
import adminRoutes from './adminRoutes';

const routes: RouteConfig[] = [
  {
    path: '/admin',
    component: MainLayout,
    routes: adminRoutes
  }
];

export default routes;
