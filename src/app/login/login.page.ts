import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol, IonCardContent, IonCard, IonRow, IonInput } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [IonInput, IonRow, IonCard, IonCardContent, IonCol, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  menuItems = [
    { icon: '../../assets/images/islamic.png', title: 'Islamic' },
    { icon: '../../assets/images/atm.png', title: 'Branch, ATM & Agent Locations' },
    { icon: '../../assets/images/discounts.png', title: 'Discounted Sites' },
    { icon: '../../assets/images/bestplaces.png', title: 'Best Places' },
    { icon: '../../assets/images/socialmessgae.png', title: 'Social Message' },
    { icon: '../../assets/images/exchange.png', title: 'Exchange Rates' },
  ];
}
