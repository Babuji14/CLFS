import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../Service/translate-service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false 
})
export class TranslatePipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  transform(key: string): string {
    return this.translateService.translate(key);
  }
}
