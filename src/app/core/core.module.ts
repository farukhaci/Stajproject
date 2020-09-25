import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ScrollbarComponent, ScrollbarService } from './utils/scrollbar';

import { ConfigService, ConfigInjectionToken, NotificationService, UserMenuService } from './services';

import { ClickOutsideDirective } from './directives';

import { TimeAgoPipe } from './pipes';

import { CoreComponent } from './core.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavComponent } from './nav/nav.component';
import { NotifMenuComponent } from './components/notif-menu/notif-menu.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

import { ConfigInterface } from './interfaces';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { ContentHeaderComponent } from './components/content-header/content-header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    CoreComponent,
    SidenavComponent,
    NavComponent,
    NotifMenuComponent,
    UserMenuComponent,
    ScrollbarComponent,
    ClickOutsideDirective,
    TimeAgoPipe,
    NavItemComponent,
    ContentHeaderComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatMenuModule,
    LayoutModule,
    MatListModule,
    MatCardModule
  ],
  providers: [ScrollbarService, NotificationService, UserMenuService],
  entryComponents: [BreadcrumbComponent]
})
export class CoreModule {
  static forRoot(config: ConfigInterface): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ConfigService,
        {
          provide: ConfigInjectionToken,
          useValue: config
        }
      ]
    };
  }
}
