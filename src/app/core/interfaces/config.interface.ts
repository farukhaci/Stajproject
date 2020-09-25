import { NavItemClass } from '../classes/nav-item.class';
import { UserMenuItemClass } from '../classes/user-menu-item.class';
/**
 * This Interface for NavItemClass
 */
export interface ConfigInterface {
  /**
   * Your application, project or company Name
   */
  app: string | undefined;
  /**
   * your application routes
   */
  navItems: NavItemClass[] | undefined;
  /**
   * your aplication user menu list ITEMS
   */
  userMenuItems: UserMenuItemClass[] | undefined;
  /**
   * It controls the parts of the core module where this parts is affected by being loged in or not
   */
  isLogedin: boolean | undefined;
  /**
   * provide img path for the img under the header
   */
  headerBackgroundImg: string | undefined;
  /**
   * provide icon details for the app header icon for example: paht: '~/myicon.png' , width: auto, height: 25px
   */
  icon: { path: string; style: object } | undefined;
  /**
   * if u want to use notification in your project set it to true DEFUALT VALUE is TRUE
   */
  showNotification: boolean;
  /**
   * if u want to use log-in/out in your project set it to true DEFUALT VALUE is TRUE
   */
  showLogin: boolean;
}
