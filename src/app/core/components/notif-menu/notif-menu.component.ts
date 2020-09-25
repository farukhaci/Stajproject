import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NotificationService } from '../../services';
import { NotificationInterface } from '../../interfaces';
import { LIST_FADE_ANIMATION, DROPDOWN_ANIMATION } from '../../animations';
@Component({
  selector: 'masoft-notif-menu',
  templateUrl: './notif-menu.component.html',
  styleUrls: ['./notif-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [...LIST_FADE_ANIMATION, ...DROPDOWN_ANIMATION]
})
export class NotifMenuComponent {
  public isOpen = false;

  constructor(public notificationService: NotificationService) {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }

  markAsRead(notification: NotificationInterface) {
    notification.read = true;
    this.notificationService.notificationEvents.next({
      event: 'read',
      notification: notification
    });
  }

  dismiss(notification: NotificationInterface) {
    this.notificationService.notificationEvents.next({
      event: 'dismiss',
      notification: notification
    });
    this.notificationService.notifications.remove(notification.id, 'id');
  }

  dismissAll() {
    if (this.notificationService.notifications.isDataLoaded) {
      this.notificationService.notificationEvents.next({
        event: 'clear',
        notification: null
      });
      this.notificationService.notifications.clear();
    }
  }
}
