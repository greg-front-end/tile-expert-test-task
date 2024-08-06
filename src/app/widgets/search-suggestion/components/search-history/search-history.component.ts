import { Component, computed, inject, input, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HistoryService } from '../../../../core/services/history/history.service';

@Component({
  selector: 'app-search-history',
  standalone: true,
  imports: [],
  templateUrl: './search-history.component.html',
  styleUrl: './search-history.component.sass',
})
export class SearchHistoryComponent {
  public historyService = inject(HistoryService);

  public onClick(history: string): void {
    this.historyService.searchPrevHistory.next(history);
  }
}
