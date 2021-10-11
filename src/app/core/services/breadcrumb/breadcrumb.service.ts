import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Data, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  // Subject emitting the breadcrumb hierarchy
  private readonly _breadcrumbs$ = new BehaviorSubject<MenuItem[]>([]);

  // Observable exposing the breadcrumb hierarchy
  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

  private breadcrumbs?: MenuItem[];
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      let root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
      // Emit the new hierarchy
      this._breadcrumbs$.next(this.breadcrumbs);
    });
  }

  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: MenuItem[] = []): MenuItem[] {
    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';

    let children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }

    for (let child of children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      let routeURL = child.snapshot.url.map(segment => segment.path).join('/');

      url += `/${routeURL}`;
      let breadcrumb: MenuItem = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        // params: child.snapshot.params,
        routerLink: url.replace('//', '/'),
      };

      let isAddBreacrumb = false;
      breadcrumbs.forEach(b => {
        if (b.label === breadcrumb.label) {
          isAddBreacrumb = true;
        }
      });
      if (!isAddBreacrumb) {
        breadcrumbs.push(breadcrumb);
      }

      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }

  // constructor(private router: Router) {
  //   // this.router.events
  //   //   .pipe(filter(event => event instanceof NavigationEnd))
  //   //   .subscribe(() => this.menuItems = this.createBreadcrumbs(this.activatedRoute.root));
  //   this.router.events
  //     .pipe(
  //       // Filter the NavigationEnd events as the breadcrumb is updated only when the route reaches its end
  //       filter(event => event instanceof NavigationEnd),
  //     )
  //     .subscribe(event => {
  //       // Construct the breadcrumb hierarchy
  //       const root = this.router.routerState.snapshot.root;
  //       const breadcrumbs: MenuItem[] = [];
  //       this.addBreadcrumb(root, breadcrumbs);

  //       // Emit the new hierarchy
  //       this._breadcrumbs$.next(breadcrumbs);
  //     });
  // }

  // private addBreadcrumb(route: ActivatedRouteSnapshot | null, breadcrumbs: MenuItem[]) {
  //   if (route) {
  //     // Add an element for the current route part
  //     if (route.data.breadcrumb) {
  //       console.log(route);
  //       const breadcrumb = {
  //         label: this.getLabel(route.data),
  //       };
  //       breadcrumbs.push(breadcrumb);
  //     }
  //     // Add another element for the next route part
  //     this.addBreadcrumb(route.firstChild, breadcrumbs);
  //   }
  // }

  // private getLabel(data: Data) {
  //   // The breadcrumb can be defined as a static string or as a function to construct the breadcrumb element out of the route data
  //   return typeof data.breadcrumb === 'function' ? data.breadcrumb(data) : data.breadcrumb;
  // }
}
