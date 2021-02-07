import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { info } from './info';
import { contents } from '../../list-item/contents/contents';
import { pickup } from '../../list-item/pickup'
import { PickupService } from '../../service/pickup.service';
import { stoc } from './stoc';


@Component({
  selector: 'app-top-main',
  templateUrl: './top.main.component.html',
  styleUrls: ['./top.main.component.css']
})
export class TopMainComponent implements OnInit{
  info = info;
  contents = contents;
  pickup = pickup;
  
  constructor(
    public pickupService: PickupService,
  ) {}
    
  ngOnInit() {
    this.rainbow();
    this.aaa();
  }
  
  // インフォメーション
  isInfoView = false;
  clickInfo() {
    this.isInfoView = true;
  }

  closeInfo() {
    this.isInfoView = false;
  }

  // ピップアップ
  clickPic(list: any) {
    this.pickupService.clickPickup(list);
  }

  closePic() {
    this.pickupService.close();
  }

  // インフォボタン
  red = 50;
  green = 100;
  blue = 150;

  countup(color:any) {
    // 白と黒にしないよう0と255は省く
    const RGBMIN = 50;
    const RGBMAX = 200;

    color += 10;
    if(color >= RGBMAX) color = RGBMIN;
    return color;
  }

  color() {
    this.red = this.countup(this.red);
    this.green = this.countup(this.green);
    this.blue = this.countup(this.blue);
  }
  
  rainbow() {
    setInterval(() => {
      this.color();
    }, 300);
  }
  
  // 入荷情報
  stoc = stoc;
  stocCurrent = 0;
  stocSlide = 0

  stocLength() {
    console.log(this.stoc.length)
    return this.stoc.length -1;
  }
  
  setCarousel() {
    if(this.stocLength() === this.stocCurrent) {
      this.stocCurrent = 0;
      this.stocSlide = 0;
    } else {
      this.stocCurrent++;
      this.stocSlide -= 220;
    }
  }

  aaa() {
    setInterval(() => {
      this.setCarousel();
    }, 3000);
  }
}
