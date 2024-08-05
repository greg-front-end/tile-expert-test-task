import { Component, signal, Signal } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { LogoComponent } from "../../ui/logo/logo.component";
import { LinkWithIcon } from '../../ui/link/model';
import { linksDataList } from './data';
import { LinkComponent } from '../../ui/link/link.component';
import { BadgeComponent } from "../../ui/badge/badge/badge.component";
import { AvatarComponent } from '../../ui/avatar/avatar/avatar.component';
import { ClickOutsideDirective } from '../../core/directives/click-outside/click-outside.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SvgIconComponent,
    LogoComponent,
    LogoComponent,
    LinkComponent,
    BadgeComponent,
    AvatarComponent,
    ClickOutsideDirective
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  public linksDataList: LinkWithIcon[] = linksDataList;
  public isActiveSearchInput: boolean = false;
}
