import { Component, input } from '@angular/core';
import { FilterCheckbox } from '../../widgets/search-suggestion/components/search-filter/model';

@Component({
  selector: 'app-check-box',
  standalone: true,
  imports: [],
  templateUrl: './check-box.component.html',
  styleUrl: './check-box.component.sass'
})
export class CheckBoxComponent {
  public checkbox = input.required<FilterCheckbox>();

  public isChecked = false;

  public onCheched(): void {
    this.isChecked = !this.isChecked
  }
}
