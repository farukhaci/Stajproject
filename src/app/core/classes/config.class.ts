import { ConfigInterface } from '../interfaces/config.interface';
import { NavItemClass } from './nav-item.class';
import { UserMenuItemClass } from './user-menu-item.class';
import { BaseModelClass } from './base-model.class';
/**
 * @class
 * @implements {ConfigInterface}
 * This class will guide you to configure your application main parts
 */
export class ConfigClass extends BaseModelClass<ConfigInterface> implements ConfigInterface {
  app: string | undefined = undefined;
  navItems: NavItemClass[] | undefined = undefined;
  userMenuItems: UserMenuItemClass[] | undefined = undefined;
  isLogedin: boolean | undefined = undefined;
  headerBackgroundImg: string | undefined = undefined;
  icon: { path: string; style: object } | undefined = undefined;
  showNotification = true;
  showLogin = true;
}
