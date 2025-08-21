import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonInput, IonButton, IonTabButton, IonGrid, IonRow, IonCol, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForwardOutline, chevronBackOutline, camera } from 'ionicons/icons';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
  standalone: true,
  imports: [IonText, IonCol, IonRow, IonGrid, IonIcon, IonContent, IonHeader, IonInput, IonButton, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})
export class OtpPage implements OnInit {

  constructor(private router:Router, private navCtrl: NavController) { 
    addIcons({chevronBackOutline,camera,chevronForwardOutline});
  }
  ngOnInit() {
  }
  navigate(){
    this.navCtrl.navigateForward('/signup');
  }
  onClick() {
    this.router.navigate(['/mpin']);
  }
}