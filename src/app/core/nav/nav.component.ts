import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { DROPDOWN_ANIMATION } from '../animations';
import { ConfigService } from '../services';
import { NavItemClass } from '../classes';
import { Subject } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { NavItemInterFace } from '../interfaces';

@Component({
  selector: 'masoft-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [DROPDOWN_ANIMATION]
})
export class NavComponent implements OnInit, OnDestroy {
  private _unsubscribe$ = new Subject<boolean>();

  private _selectedNavItem: NavItemClass = new NavItemClass();
  public itemCanFit: number = Math.round(window.innerWidth / 250);

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.itemCanFit = Math.round(window.innerWidth / 250);
  }

  constructor(public configService: ConfigService, private _router: Router) {}

  ngOnInit(): void {
    this._router.events.pipe(takeUntil(this._unsubscribe$)).subscribe(event => {
      if (event instanceof NavigationStart) {
        this._selectedNavItem = new NavItemClass();
      }
    });
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next(false);
  }

  public showInToolBar() {
    return this.configService.navItems.filter((v, index) => index < this.itemCanFit);
  }

  public showInMore() {
    return this.configService.navItems.filter((v, index) => index >= this.itemCanFit);
  }

  public hasSubNav(item: NavItemInterFace) {
    return item.subNavs ? !!item.subNavs.length : false;
  }

  public toggle(selectNavItem: NavItemInterFace | null) {
    selectNavItem ? this._selectedNavItem.init(selectNavItem) : this._selectedNavItem.init(new NavItemClass());
  }

  public toggleMore() {
    this._selectedNavItem = new NavItemClass();
    this._selectedNavItem.init({ title: 'more', icon: '', navLink: '', subNavs: [] });
  }

  public isOpen(navItem: NavItemInterFace) {
    return this._selectedNavItem && this._selectedNavItem.title === navItem.title;
  }

  public isMoreOpen() {
    return this._selectedNavItem.title === 'more';
  }

  public getInitials(navItem: NavItemInterFace) {
    if (navItem.title) {
      const words = navItem.title.split(' ');

      if (words.length > 1) {
        return words[0].charAt(0).toUpperCase() + words[1].charAt(0).toLowerCase();
      } else {
        return navItem.title.charAt(0).toUpperCase() + navItem.title.charAt(1).toLowerCase();
      }
    }
    return '';
  }
}
