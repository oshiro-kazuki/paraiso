import { Component } from '@angular/core';
import { from } from 'rxjs';
import { food } from './food'

@Component({
  selector: 'app-header',
  templateUrl: './takeout.component.html',
  styleUrls: ['./takeout.component.css']
})
export class TakeoutComponent {
  food = food;
}
