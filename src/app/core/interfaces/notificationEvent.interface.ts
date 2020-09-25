import { NotificationInterface } from './notification.interface';

export interface NotificationEventInterface {
  event: 'read' | 'dismiss' | 'clear';
  notification: NotificationInterface | null;
}
