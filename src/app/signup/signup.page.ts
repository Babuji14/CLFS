import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { globeOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonAvatar, IonItem, IonList, IonSelect, IonSelectOption, IonPopover, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonPopover,IonInput, IonItem, IonAvatar, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonList,IonSelect, IonSelectOption, CommonModule, FormsModule]
})
export class SignupPage implements OnInit {

  constructor() { 
    addIcons({ globeOutline });
  }

  ngOnInit() {
  }

}
