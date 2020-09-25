import {
  animate,
  style,
  transition,
  trigger,
  state
} from '@angular/animations';

export const ROTATE = [
  trigger('rotatedState', [
    state('false', style({ transform: 'rotate({{default}})' }), {
      params: { default: 0 }
    }),
    state('true', style({ transform: 'rotate({{deg}}deg)' }), {
      params: { deg: 360 }
    }),
    transition('false => true', animate('200ms ease-out')),
    transition('true => false', animate('200ms ease-in'))
  ])
];
