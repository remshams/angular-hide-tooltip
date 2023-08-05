import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TooltipIfCollapsedDirective } from './tooltip-if-collapsed.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatTooltipModule, TooltipIfCollapsedDirective],
})
export class AppComponent {
  text = 'This is a long text';
}
