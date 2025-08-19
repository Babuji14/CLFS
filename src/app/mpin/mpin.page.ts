import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonButton, IonGrid, IonInput, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForwardOutline, chevronBackOutline, camera } from 'ionicons/icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mpin',
  templateUrl: './mpin.page.html',
  styleUrls: ['./mpin.page.scss'],
  standalone: true,
  imports: [IonIcon, IonInput, IonGrid, IonButton, IonCol, IonRow, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule]
})
export class MpinPage implements OnInit {

  constructor(private router:Router) {
    addIcons({chevronBackOutline,camera,chevronForwardOutline});
   }

  ngOnInit() {
  }
  toNavigate() {
    this.router.navigate(['/details']);
  }
}
