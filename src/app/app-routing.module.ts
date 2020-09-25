import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full',
        data: {
          breadcrumb: 'Home',
        },
      },
      {
        path: 'examples',
        loadChildren: () => import('./pages/pages.module').then((module) => module.PagesModule),
        data: {
          breadcrumb: 'Examples',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
