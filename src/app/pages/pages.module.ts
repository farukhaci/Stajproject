import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { MatCardModule } from '@angular/material/card';
import { FinansPageComponent } from './finans-page/finans-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PazarlamaPageComponent } from './pazarlama-page/pazarlama-page.component';
import { SatisPageComponent } from './satis-page/satis-page.component';
import { TedarikPageComponent } from './tedarik-page/tedarik-page.component';
import { UretimPageComponent } from './uretim-page/uretim-page.component';

@NgModule({
  declarations: [
    PagesComponent,
    FinansPageComponent,
    PazarlamaPageComponent,
    SatisPageComponent,
    TedarikPageComponent,
    UretimPageComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, MatCardModule, FlexLayoutModule],
})
export class PagesModule {}
