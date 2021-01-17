import { Component } from '@angular/core';
import { headerNavi } from './header-navi';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Dining Bar Paraiso';
  headerNavi = headerNavi;

  isBar = true;
  isNavi = true;
  onClickNavi() {
    this.isBar ? (this.isBar = false) : (this.isBar = true);
    this.isNavi ? (this.isNavi = false) : (this.isNavi = true);
  } 
}
