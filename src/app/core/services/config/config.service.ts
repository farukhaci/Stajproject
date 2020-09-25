import { Injectable, Inject } from '@angular/core';
import { ConfigClass, NavItemClass, UserMenuItemClass } from '../../classes';
import { ConfigInterface } from '../../interfaces';
import { ConfigInjectionToken } from './config.injectionToken';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private _config = new ConfigClass();

  constructor(@Inject(ConfigInjectionToken) private _configInjection: ConfigInterface) {
    this._config.init(this._configInjection);
  }

  get appName(): string {
    return this._config.app ?? '';
  }

  get navItems(): NavItemClass[] {
    return this._config.navItems ?? [];
  }

  get userMenuItems(): UserMenuItemClass[] {
    return this._config.userMenuItems ?? [];
  }

  get isLogedin(): boolean {
    return !!this._config.isLogedin;
  }

  set isLogedin(value: boolean) {
    this._config.isLogedin = value;
  }

  get headerBackgroundImg() {
    return this._config.headerBackgroundImg;
  }

  get icon() {
    return this._config.icon;
  }

  get showNotification(): boolean {
    return this._config.showNotification;
  }
  get showLogin(): boolean {
    return this._config.showLogin;
  }
}
