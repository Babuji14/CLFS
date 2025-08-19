import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonIcon, IonContent, IonInput, IonCheckbox, IonItem, IonLabel, IonButton, IonDatetime, IonPopover, IonList, IonRadio, IonRadioGroup } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForwardOutline, chevronBackOutline, camera, globeOutline, checkmarkCircle } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonDatetime, IonList, IonPopover, IonButton, IonLabel, IonItem, IonCheckbox, IonInput, IonContent, IonIcon, IonHeader, IonToolbar, CommonModule, FormsModule]
})
export class DetailsPage implements OnInit {

  constructor(private router:Router) {
    addIcons({chevronBackOutline,checkmarkCircle,globeOutline,camera,chevronForwardOutline});
   }

  ngOnInit() {
  }
  toNavigate() {
    this.router.navigate(['/mpin']);  
  }
  
  selectedMaritalStatus: string = '';
  selectMaritalStatus(status: string) {
    this.selectedMaritalStatus = status;
    const popover = document.querySelector('ion-popover') as HTMLIonPopoverElement;
    if (popover) {
      popover.dismiss();
    }
  }

  selectedGender: string = '';
  selectGender(gender: string) {
    this.selectedGender = gender;
    const popover = document.querySelector('ion-popover') as HTMLIonPopoverElement;
    if (popover) {
      popover.dismiss();
    }
  }

  dob: string = '';
  setDob(event: any) {
    this.dob = event.detail.value;
    const popover = document.querySelector('ion-popover') as HTMLIonPopoverElement;
    if (popover) {
      popover.dismiss();
    }
  }

  selectedAccountType: string = '';
  onAccountTypeChange(type: string) {
    this.selectedAccountType = type;
  }

  onClick(){
    this.router.navigate(['/login']);
  }
}
