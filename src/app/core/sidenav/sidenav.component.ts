import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ConfigService } from '../services';
import { Subject } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'masoft-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {
  private _unsubscribe$: Subject<boolean> = new Subject<boolean>();
  public appName: string;
  public isOpen = false;
  public breadcrumbs: { label: string; url: string }[] = [];
  public snav: any;

  constructor(
    private _router: Router,
    private _mediaObserver: MediaObserver,
    private _activatedRoute: ActivatedRoute,
    public configService: ConfigService
  ) {
    this.appName = this.configService.appName;
    this._mediaObserver
      .asObservable()
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((change: MediaChange[]) => {
        if (change.some(c => c.mqAlias === 'gt-sm')) {
          if (this.isOpen) {
            this.isOpen = false;
          }
        }
      });
    this._router.events.pipe(takeUntil(this._unsubscribe$)).subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.isOpen) {
          this.isOpen = false;
        }
      }
      if (event instanceof NavigationEnd) {
        this.breadcrumbs = this._createBreadcrumbs(this._activatedRoute.root).filter(
          (value, index, self) => self.findIndex(bc => bc.label === value.label) === index
        );
      }
    });
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this._unsubscribe$.next(true);
  }

  public navMainPage(): void {
    this._router.navigate(['/']);
  }

  private _createBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: { label: string; url: string }[] = []
  ): { label: string; url: string }[] {
    const children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label: string = child.snapshot.data['breadcrumb'] as string;
      if (label && !this.breadcrumbs.some(bc => bc.label === label)) {
        breadcrumbs.push({ label: label, url: url });
      }

      return this._createBreadcrumbs(child, url, breadcrumbs);
    }

    return [];
  }
}
