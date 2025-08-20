import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor() {}

  // transform(key: string): string {
  //   return this.langService.getTranslation(key);
  // }

  private translations: any = {
    en: {
      LANGUAGE: "Language",
      SIGNUP: "Sign Up",
      "ENTER YOUR MOBILE NUMBER TO GET STARTED AND ACCESS EXCLUSIVE FEATURES": "Enter your mobile number to get started and access exclusive features",
      "ENTER MOBILE NUMBER": "Enter Mobile Number",
      CONTINUE: "Continue",
      ISLAMIC: "Islamic",
      "BRANCH ATM & AGENT": "Branch ATM & Agent",
      BESTPLACES: "Best Places",
      "SOCIAL MESSAGE": "Social Message",
      "EXCHANGE RATES": "Exchange Rates"
    },
    ps: {
      LANGUAGE: "ژبه",
      SIGNUP: "ساین اپ",
      "ENTER YOUR MOBILE NUMBER TO GET STARTED AND ACCESS EXCLUSIVE FEATURES": "خپل موبایل نمبر دننه کړئ ترڅو پیل او ځانګړي ځانګړتیاوې ترلاسه کړئ",
      "ENTER MOBILE NUMBER": "موبایل نمبر دننه کړئ",
      CONTINUE: "ادامه ورکړئ",
      ISLAMIC: "اسلامي",
      "BRANCH ATM & AGENT": "څانګه، ATM او استازی",
      BESTPLACES: "ښه ځایونه",
      "SOCIAL MESSAGE": "ټولنیز پیغام",
      "EXCHANGE RATES": "د تبادلې نرخونه"
    },
    fa: {
      LANGUAGE: "زبان",
      SIGNUP: "ثبت نام",
      "ENTER YOUR MOBILE NUMBER TO GET STARTED AND ACCESS EXCLUSIVE FEATURES": "شماره موبایل خود را وارد کنید تا شروع کنید و به ویژگی‌های ویژه دسترسی پیدا کنید",
      "ENTER MOBILE NUMBER": "شماره موبایل را وارد کنید",
      CONTINUE: "ادامه",
      ISLAMIC: "اسلامی",
      "BRANCH ATM & AGENT": "شعبه، ATM و نماینده",
      BESTPLACES: "بهترین مکان‌ها",
      "SOCIAL MESSAGE": "پیام اجتماعی",
      "EXCHANGE RATES": "نرخ تبادله"
    }
  };

  // default language
  private currentLang: string = 'en';

  setLanguage(lang: string) {
    this.currentLang = lang;
  }

  transform(key: string): string {
    return this.translations[this.currentLang][key] || key;
  }
}