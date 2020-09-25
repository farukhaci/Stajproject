import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificationStream } from '../../streams';
import { NotificationEventInterface } from '../../interfaces';

@Injectable()
export class NotificationService {
  public notifications = new NotificationStream();
  public notificationEvents = new Subject<NotificationEventInterface>();
  constructor() {}
}
