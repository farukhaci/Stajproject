import { NotificationInterface } from '../interfaces';
import { BaseModelClass } from './base-model.class';

export class NotificationClass extends BaseModelClass<NotificationInterface> implements NotificationInterface {
  id = undefined;
  icon = undefined;
  state = undefined;
  read = undefined;
  title = undefined;
  time = undefined;
}
