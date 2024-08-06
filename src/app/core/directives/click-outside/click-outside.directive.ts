import { Directive, ElementRef, EventEmitter, HostListener, inject, input, Input, output, Output } from '@angular/core';
import { SearchSuggestionComponent } from '../../../widgets/search-suggestion/search-suggestion.component';

@Directive({
    selector: '[appClickOutside]',
    standalone: true,
})
export class ClickOutsideDirective {
    private elementRef = inject(ElementRef);
    public clickOutside = output<MouseEvent>()
    public ignoreElements = input<Array<HTMLElement | undefined>>()

    @HostListener('document:click', ['$event', '$event.target'])
    public onClick(event: MouseEvent, targetElement: HTMLElement): void {
        if (!targetElement) {
            return;
        }
        
        // console.log(this.ignoreElements())
        const clickedInside =
            this.elementRef.nativeElement.contains(targetElement)
            || this.ignoreElements()?.find((item) => item?.contains(targetElement));
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    }
}
