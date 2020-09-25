import { Component, OnInit, Input } from '@angular/core';
import { ROTATE, DROPDOWN_ANIMATION, LIST_FADE_ANIMATION } from '../../animations';
import { NavItemClass } from '../../classes';
import { NavItemInterFace } from '../../interfaces';

@Component({
  selector: 'masoft-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  animations: [ROTATE, DROPDOWN_ANIMATION, LIST_FADE_ANIMATION],
})
export class NavItemComponent implements OnInit {
  @Input() navItems: NavItemClass[];
  private _selectedNavItem = new NavItemClass();
  constructor() {}

  ngOnInit() {}

  public hasSubNav(item: NavItemInterFace) {
    return item.subNavs ? !!item.subNavs.length : false;
  }

  public open(selectNavItem: NavItemInterFace) {
    this._selectedNavItem.init(selectNavItem);
  }

  public isOpen(navItem: NavItemInterFace) {
    return this._selectedNavItem.title === navItem.title;
  }

  public getInitials(navItem: NavItemInterFace): string {
    if (navItem.title) {
      const words = navItem.title.split(' ');

      if (words.length > 1) {
        return words[0].charAt(0).toUpperCase() + words[1].charAt(0).toLowerCase();
      } else {
        return navItem.title.charAt(0).toUpperCase() + navItem.title.charAt(1).toLowerCase();
      }
    } else {
      return '';
    }
  }
}
