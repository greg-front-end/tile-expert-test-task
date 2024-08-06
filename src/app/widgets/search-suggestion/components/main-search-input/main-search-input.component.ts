import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, OnInit, Signal, viewChild } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { FormsModule } from '@angular/forms';
import { HistoryService } from '../../../../core/services/history';
import { ClickOutsideDirective } from '../../../../core/directives/click-outside';
import { SearchSuggestionComponent } from '../../search-suggestion.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-main-search-input',
  standalone: true,
  imports: [
    SvgIconComponent,
    FormsModule,
    ClickOutsideDirective,
    SearchSuggestionComponent,
  ],
  templateUrl: './main-search-input.component.html',
  styleUrl: './main-search-input.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainSearchInputComponent implements OnInit {
  public searchSuggestionsBlock: Signal<ElementRef | undefined> = viewChild<SearchSuggestionComponent, ElementRef>(SearchSuggestionComponent, { read: ElementRef });
  public historyService = inject(HistoryService);

  public searchValue: string = '';
  public isActiveSearchInput: boolean = false;
  public isInputFocused: boolean = false
  public placeholder: string = 'Поисковый запрос'

  public destroyRef = inject(DestroyRef);

  public ngOnInit(): void {
    this.historyService.searchPrevHistory
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(prev => this.searchValue = prev)
    
    if (globalThis.innerWidth > 414) {
      this.placeholder = 'Поисковый запрос'
    } else {
      this.placeholder = 'Поиск'
      this.isInputFocused = true
    }
  }

  public onFocus(): void {
    if (globalThis.innerWidth > 414) {
      this.isInputFocused = true;
    }
  }

  public onClickInputOutSide(): void {
    if (globalThis.innerWidth > 414) {
      this.isActiveSearchInput = false
      this.isInputFocused = false
    }
  }

  public onActiveSearch(): void {
    this.isActiveSearchInput = !this.isActiveSearchInput
  }

  public onSumbitSearch(): void {
    if (!this.searchValue) return;

    this.historyService.updateHistory(this.searchValue);
    this.searchValue = ''

    if (globalThis.innerWidth > 414) {
      this.isActiveSearchInput = false
      this.isInputFocused = false
    }
  }
}
