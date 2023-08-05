import { Directive, ElementRef, HostListener } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Directive({
  selector: '[appTooltipIfCollapsed]',
  standalone: true,
})
export class TooltipIfCollapsedDirective {
  constructor(private element: ElementRef, private tooltip: MatTooltip) {}

  ngAfterViewInit(): void {
    // The requestAnimationFrame gives the browser some time to calculate the scrollWidth which is required
    // to determine if the tooltip should be hidden or not.
    window.requestAnimationFrame(() => {
      this.updateTooltip();
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    window.requestAnimationFrame(() => {
      this.updateTooltip();
    });
  }

  private updateTooltip() {
    if (
      this.element.nativeElement.getBoundingClientRect().width <
      this.element.nativeElement.scrollWidth
    ) {
      this.tooltip.disabled = false;
    } else {
      this.tooltip.disabled = true;
    }
  }
}
