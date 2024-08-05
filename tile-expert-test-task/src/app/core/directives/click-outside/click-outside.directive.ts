import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
    selector: '[appClickOutside]',
    standalone: true,
})
export class ClickOutsideDirective {
    constructor(private elementRef: ElementRef) {}
    @Output() public clickOutside = new EventEmitter<MouseEvent>();

    @HostListener('document:click', ['$event', '$event.target'])
    public onClick(event: MouseEvent, targetElement: HTMLElement): void {
        if (!targetElement) {
            return;
        }

        const clickedInside =
            this.elementRef.nativeElement.contains(targetElement)
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    }
}
