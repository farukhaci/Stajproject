export interface NotificationInterface {
  id: string | undefined;
  state: 'primary' | 'accent' | 'warn' | '' | undefined;
  icon: string | undefined;
  read: boolean | undefined;
  title: string | undefined;
  time: Date | undefined;
}
