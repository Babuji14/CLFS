import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonSkeletonText, IonText, IonCard, IonCardContent, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonFooter, IonCardContent, IonCard, IonText, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule]
})
export class DashboardPage implements OnInit {

  constructor() { }

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
}
