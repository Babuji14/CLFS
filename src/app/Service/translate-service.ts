import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  
  private translations: Record<string, string> = {};
  private lang$ = new BehaviorSubject<string>('en');

  constructor(private http: HttpClient) {
    const saved = localStorage.getItem('lang') || 'en';
    this.setLanguage(saved);
  }

  setLanguage(lang: string) {
    localStorage.setItem('lang', lang);
    this.http.get<Record<string, string>>(`assets/Languages/${lang}.json`)
      .subscribe(
        data => {
          this.translations = data || {};
          this.lang$.next(lang);
        },
        err => {
          console.error('Could not load language file', err);
          this.translations = {};
          this.lang$.next(lang);
        }
      );
  }

  getCurrentLang(): string {
    return this.lang$.value;
  }

  onLangChange() {
    return this.lang$.asObservable();
  }

  translate(key: string): string {
    if (!key) return '';
    return this.translations[key] ?? key;
  }
}
