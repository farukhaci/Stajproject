import { BaseModelClass } from './base-model.class';
import { UserMenuItemInterface } from '../interfaces';

export class UserMenuItemClass extends BaseModelClass<UserMenuItemInterface> implements UserMenuItemInterface {
  icon = undefined;
  title = undefined;
  clickEventName = undefined;
}
