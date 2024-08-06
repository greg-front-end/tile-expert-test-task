import { Component, input, Signal } from '@angular/core';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SearchHistoryComponent } from './components/search-history/search-history.component';

@Component({
  selector: 'app-search-suggestion',
  standalone: true,
  imports: [SearchFilterComponent, SearchHistoryComponent],
  templateUrl: './search-suggestion.component.html',
  styleUrl: './search-suggestion.component.sass'
})
export class SearchSuggestionComponent {
  public isActive = input<boolean>(false);
}
