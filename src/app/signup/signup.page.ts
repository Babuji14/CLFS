import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { globeOutline, arrowForward, chevronForwardOutline } from 'ionicons/icons';
import { IonContent,IonLabel, IonHeader,IonCard, IonToolbar, IonButton, IonIcon, IonCardContent, IonItem, IonList, IonPopover, IonInput, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from '../Service/translate-service';
import { TranslatePipe } from '../Pipe/translate-pipe';

@Component({
  selector: 'app-signup',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonPopover, IonLabel, IonInput, IonItem, IonButton, IonContent, IonHeader, IonToolbar, IonIcon, IonList, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, TranslatePipe]
})
export class SignupPage implements OnInit {

  constructor(private router: Router, private langService:TranslateService) { 
    addIcons({globeOutline,chevronForwardOutline,arrowForward});
  }

ngOnInit() {
}

  
  menuItems = [
    { icon: '../../assets/images/islamic.png', title: 'Islamic' },
    // or this way to use translate title: this.langService.translate('Islamic')
    { icon: '../../assets/images/atm.png', title: 'Branch, ATM & Agent Locations' },
    { icon: '../../assets/images/discounts.png', title: 'Discounted Sites' },
    { icon: '../../assets/images/bestplaces.png', title: 'Best Places' },
    { icon: '../../assets/images/socialmessgae.png', title: 'Social Message' },
    { icon: '../../assets/images/exchange.png', title: 'Exchange Rates' },
    
  ];

//   slides = [
//   { image: '../../assets/images/exchange.png' },
//   { image: '../../assets/images/discounts.png' },
//   { image: '../../assets/images/atm.png' },
//   { image: '../../assets/images/bestplaces.png' }
// ];

  phNo = new FormGroup({
    mobileNo:new FormControl('', Validators.required),
  });
  
  onSubmit() {
    if(this.phNo.valid) {
      this.router.navigate(['/otp']);
      console.log('Form Submitted!', this.phNo.value);
      
    }
  }
  // switch(lang :string){
  //   if(lang=='en'){
  //     document.documentElement.setAttribute('dir', 'ltr');
  //   }else if(lang=='ps'){
  //     document.documentElement.setAttribute('dir', 'rtl');
  //     // this.langService.loadLanguage(lang);
  //     // this.translatePipe.setLanguage(lang);
  //   }else{
  //     // this.langService.loadLanguage(lang);
  //     // this.translatePipe.setLanguage(lang);
  //   }

  switch(lang: string) {
    const dir = (lang === 'en') ? 'ltr' : 'rtl';
    document.documentElement.setAttribute('dir', dir);
    this.langService.setLanguage(lang);
  }
}