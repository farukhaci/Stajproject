import { Component } from '@angular/core';
import { UserMenuService, ConfigService } from '../../services';
import { DROPDOWN_ANIMATION } from '../../animations';

@Component({
  selector: 'masoft-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  animations: [DROPDOWN_ANIMATION]
})
export class UserMenuComponent {
  isOpen = false;

  constructor(public configService: ConfigService, public userMenuService: UserMenuService) {}

  public toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  public onClickOutside() {
    this.isOpen = false;
  }

  public loginEvent() {
    this.userMenuService.clickEvent({ clickEventName: 'login', icon: 'login', title: 'login' });
  }
}
