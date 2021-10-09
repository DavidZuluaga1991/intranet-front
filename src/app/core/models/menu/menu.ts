export interface IMenu {
  path?: string;
  name?: string;
  img?: string;
  routes?: IMenu[];
}
export class Menu implements IMenu {
  path?: string;
  name?: string;
  img?: string;
  routes?: IMenu[];
  constructor(route: IMenu) {
    this.path = route.path;
    this.img = route.img;
    this.routes = route.routes;
  }
}
