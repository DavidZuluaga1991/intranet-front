import { Menu } from '../core/models/menu/menu';

export const menu: Menu[] = [
  {
    name: 'Mantenimiento',
    path: '/home/manintenance',
    routes: [
      {
        name: 'Usuario',
        path: 'user',
      },
      {
        name: 'Perfil',
        path: 'profile',
      },
      {
        name: 'Horario',
        path: 'schedule',
      },
    ],
  },
  {
    name: 'Proyectos',
    path: 'home/projects',
  },
];
