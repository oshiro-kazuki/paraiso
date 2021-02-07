import { Injectable } from '@angular/core';

@Injectable()
export class PickupService {
  pickupTitle: any;
  pickupText: any;
  isView = false;

  clickPickup(list: any) {
    this.pickupTitle = list.title;
    this.pickupText = list.text;
    this.isView = true;
  }
  
  close() {
    this.isView = false;
  }

}