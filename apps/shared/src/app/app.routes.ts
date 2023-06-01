import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./frame/frame.component').then(
      (c) => c.FrameComponent
    ),
    outlet: 'primary',
    children: [
      {
        path: '',
        loadComponent: () => import('./Parent/parent.component').then(c => c.ParentComponent),
        outlet: 'primary'
      },
      {
        path: 'parent',
        loadComponent: () => import('./frame/frame-drawer/frame-drawer.component').then(
          c => c.FrameDrawerComponent),
        outlet: 'sidenav',
        children: [
          {
            path: 'edit',
            loadComponent: () => import('./Child/child.component').then(c => c.ChildComponent),
          }
        ]
      }

    ]
  }
];
