import { ChangeDetectionStrategy, Component} from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { LogoComponent } from "../../ui/logo/logo.component";
import { LinkWithIcon } from '../../ui/link/model';
import { linksDataList } from './data';
import { LinkComponent } from '../../ui/link/link.component';
import { BadgeComponent } from "../../ui/badge/badge/badge.component";
import { AvatarComponent } from '../../ui/avatar/avatar/avatar.component';
import { ClickOutsideDirective } from '../../core/directives/click-outside';
import { SearchSuggestionComponent } from '../search-suggestion/search-suggestion.component';
import { FormsModule } from '@angular/forms';
import { MainSearchInputComponent } from '../search-suggestion/components/main-search-input/main-search-input.component';

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
    ClickOutsideDirective,
    SearchSuggestionComponent,
    FormsModule,
    MainSearchInputComponent,
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {   
  public linksDataList: LinkWithIcon[] = linksDataList;
}
