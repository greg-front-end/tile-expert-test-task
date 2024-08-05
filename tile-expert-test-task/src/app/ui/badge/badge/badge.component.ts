import { Component, input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.sass'
})
export class BadgeComponent {
  public numberOfNotifications = input<number>();
}
