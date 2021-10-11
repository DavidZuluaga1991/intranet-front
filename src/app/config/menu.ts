import { MenuItem } from 'primeng/api';

export const menu: MenuItem[] = [
  {
    label: 'Inicio',
    routerLink: '/home',
    expanded: true,
    id: '1',
    //: 'src/assets/images/code_society.png',
    items: [
      {
        id: '11',
        label: 'Mantenimiento',
        routerLink: 'manintenance',
        expanded: true,
        items: [
          {
            id: '111',
            label: 'Usuario',
            routerLink: '/home/manintenance/user',
          },
          {
            id: '112',
            label: 'Perfil',
            routerLink: '/home/manintenance/profile',
          },
          {
            id: '113',
            label: 'Horario',
            routerLink: '/home/manintenance/schedule',
          },
        ],
      },
      {
        id: '12',
        label: 'Proyectos',
        routerLink: 'projects',
      },
    ],
  },
];
