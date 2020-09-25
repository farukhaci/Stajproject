import { Injectable } from '@angular/core';
import { UserMenuItemClass } from '../../classes';
import { Subject } from 'rxjs';
import { ConfigService } from '../config/config.service';
import { UserMenuItemInterface } from '../../interfaces';

@Injectable()
export class UserMenuService {
  public menuClickEvent: Subject<string> = new Subject<string>();
  private _userMenu: UserMenuItemClass[] = new Array<UserMenuItemClass>();
  private _userName: string;

  constructor(private _configService: ConfigService) {
    this.userMenu = this._configService.userMenuItems;
  }

  public get userMenu(): UserMenuItemClass[] {
    return this._userMenu;
  }

  public set userMenu(menu: UserMenuItemClass[]) {
    this._userMenu = [];
    menu.forEach(element => {
      this._userMenu.push(element);
    });
  }

  public get userName(): string {
    return this._userName ?? 'Welcome';
  }

  public set userName(name: string) {
    this._userName = name;
  }

  public clickEvent(menuItem: UserMenuItemInterface): void {
    this.menuClickEvent.next(menuItem.clickEventName);
  }
}
