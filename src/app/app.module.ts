import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule, ConfigClass, NavItemClass, UserMenuItemClass } from './core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';

const home = new NavItemClass();
home.init({
  title: 'Home',
  icon: 'dashboard',
  navLink: '/',
  subNavs: [],
});

const examples = new NavItemClass();
examples.init({ title: 'Examples', icon: 'group', navLink: '/examples', subNavs: [] });

const finans = new NavItemClass();
finans.init({ title: 'Finans Göstergileri', icon: null, navLink: '/examples/finans', subNavs: [] });

const pazarlama = new NavItemClass();
pazarlama.init({ title: 'Pazarlama Göstergileri', icon: null, navLink: '/examples/pazarlama', subNavs: [] });

const satis = new NavItemClass();
satis.init({ title: 'Satış Göstergileri', icon: null, navLink: '/examples/satis', subNavs: [] });

const tedarik = new NavItemClass();
tedarik.init({ title: 'Tedarik Göstergileri', icon: null, navLink: '/examples/tedarik', subNavs: [] });

const uretim = new NavItemClass();
uretim.init({ title: 'Üretim Göstergileri', icon: null, navLink: '/examples/uretim', subNavs: [] });

if (examples.subNavs) {
  examples.subNavs.push(finans, pazarlama, satis, tedarik, uretim);
}

const userMenu: Array<UserMenuItemClass> = [];

const config: ConfigClass = new ConfigClass();
config.init({
  app: 'ERP Dashboard',
  navItems: [home, examples],
  userMenuItems: userMenu,
  isLogedin: false,
  headerBackgroundImg: '/assets/img/header-background-1.jpg',
  icon: undefined,
  showNotification: false,
  showLogin: false,
});

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule, BrowserAnimationsModule, CoreModule.forRoot(config), MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
