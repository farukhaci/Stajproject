import {
  animate,
  style,
  transition,
  trigger,
  state
} from '@angular/animations';

export const DROPDOWN_ANIMATION = [
  trigger('toggleDropdown', [
    state(
      'false',
      style({
        visibility: 'hidden',
        transform: 'translateY(-110%)'
      })
    ),
    state(
      'true',
      style({
        visibility: 'visible',
        transform: 'translateY(0)'
      })
    ),
    transition('false <=> true', [
      animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
    ])
  ])
];
