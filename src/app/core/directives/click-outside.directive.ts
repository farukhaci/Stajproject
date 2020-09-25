import {
  Directive,
  Output,
  EventEmitter,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[masoftClickOutside]'
})
export class ClickOutsideDirective {
  @Output()
  public masoftClickOutside = new EventEmitter<any>();

  constructor(private _elementRef: ElementRef) {}

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: any, targetElement: any): void {
    if (!targetElement) {
      return;
    }
    const clickedInside = this._elementRef.nativeElement.contains(
      targetElement
    );

    if (!clickedInside) {
      this.masoftClickOutside.emit(event);
    }
  }
}
