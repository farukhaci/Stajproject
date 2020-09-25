import { BaseModelClass } from './base-model.class';
import { NavItemInterFace } from '../interfaces/nav-item.interface';

/**
 * @class
 * @implements {NavItemInterFace}
 *
 * This class will initiate your navigations buttons dynamically
 *
 * IMPORTANT NOTE: you dont have to provide a value for navLink of a parent NavItemClass navigation IF this has subNavs
 */
export class NavItemClass extends BaseModelClass<NavItemInterFace> implements NavItemInterFace {
  title: string | undefined = undefined;
  icon: string | undefined = undefined;
  navLink: string | undefined = undefined;
  subNavs: NavItemInterFace[] | undefined = undefined;
}
