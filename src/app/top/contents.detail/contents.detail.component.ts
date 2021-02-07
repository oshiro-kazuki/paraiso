import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { contents } from '../../list-item/contents/contents'



@Component({
  selector: 'app-top-main',
  templateUrl: './contents.detail.component.html',
  styleUrls: ['./contents.detail.component.css']
})
export class ContentsDetailComponent implements OnInit {
  contents: any;
  arr: any = [];

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.setContent();
  }
  
  setContent() {
    const id = this.route.snapshot.paramMap.get('contentId');
  
    this.contents = contents.find((aaa: any, index: any) => {
      return index === Number(id);
    });
  }


}
