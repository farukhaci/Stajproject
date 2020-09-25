import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { FinansPageComponent } from './finans-page/finans-page.component';
import { MatCardModule } from '@angular/material/card';
import { PazarlamaPageComponent } from './pazarlama-page/pazarlama-page.component';
import { SatisPageComponent } from './satis-page/satis-page.component';
import { TedarikPageComponent } from './tedarik-page/tedarik-page.component';
import { UretimPageComponent } from './uretim-page/uretim-page.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'finans',
        component: FinansPageComponent,
        data: {
          breadcrumb: 'Finans Göstergileri',
        },
      },
      {
        path: 'pazarlama',
        component: PazarlamaPageComponent,
        data: {
          breadcrumb: 'Pazarlama Göstergileri',
        },
      },
      {
        path: 'satis',
        component: SatisPageComponent,
        data: {
          breadcrumb: 'Satış Göstergileri',
        },
      },
      {
        path: 'tedarik',
        component: TedarikPageComponent,
        data: {
          breadcrumb: 'Tedarik Göstergileri',
        },
      },
      {
        path: 'uretim',
        component: UretimPageComponent,
        data: {
          breadcrumb: 'Uretim Göstergileri',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatCardModule],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
