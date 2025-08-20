import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private translations: any = {};
  private currentLang: string = 'en';

  constructor(private http: HttpClient) {
  //   this.loadLanguage(this.currentLang);
  // }

  // // loadLanguage(lang: string) {
  // //   return this.http.get(`/assets/languages/${lang}.json`).subscribe(data => {
  // //     this.translations = data;
  // //     this.currentLang = lang;
  // //   });
  // // }

  // getTranslation(key: string): string {
  //   return this.translations[key] || key;
  // }
}
}