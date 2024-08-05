import { Component, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';
import { Link, LinkWithIcon } from './model';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [SvgIconComponent, RouterLink],
  templateUrl: './link.component.html',
  styleUrl: './link.component.sass'
})
export class LinkComponent {
  public link = input<LinkWithIcon>();
  public variant = input<string>()
}
