import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private history = signal<string[]>([
    'закрепить теги', 
    'кнопка',
    'приложение',
    'форма',
    'текстовое поле',
    'выпадающий список',
  ]);

  public searchPrevHistory = new BehaviorSubject<string>("");

  public updateHistory(newHistory: string): void {
    this.history.update(prev => {
      if (prev.length > 10) {
        return [newHistory, ...prev.slice(0, 5)]
      }

      if (prev.includes(newHistory)) {
        const updatedHistory = prev.splice(prev.indexOf(newHistory), 1)
        return [...updatedHistory, ...prev]
      }

      return [newHistory, ...prev]
    })
  }

  public getAllHistory = computed(() => this.history())
}
