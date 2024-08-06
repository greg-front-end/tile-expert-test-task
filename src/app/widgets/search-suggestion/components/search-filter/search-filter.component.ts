import { Component } from '@angular/core';
import { FilterCheckbox } from './model';
import { authorCheckboxList, onlyCheckboxList } from './data';
import { CheckBoxComponent } from '../../../../ui/check-box/check-box.component';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [CheckBoxComponent, SvgIconComponent],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.sass'
})
export class SearchFilterComponent {
  public authorCheckboxList: FilterCheckbox[] = authorCheckboxList;
  public onlyCheckboxList: FilterCheckbox[] = onlyCheckboxList;
}
