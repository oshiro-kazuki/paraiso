import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { contents } from '../../list-item/contents/contents';
import { picup } from './popup';


@Component({
  selector: 'app-top-main',
  templateUrl: './top.main.component.html',
  styleUrls: ['./top.main.component.css']
})
export class TopMainComponent implements OnInit{
  contents = contents;
  picup = picup;
  
  ngOnInit() {
    
  }

  createObserver() {
    const target = document.getElementById('aboutText');
    let observer;
  
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: this.buildThresholdList()
    };
  
    observer = new IntersectionObserver(this.handleIntersect, options);
    observer.observe(target);
  }

  buildThresholdList() {
    let thresholds = [];
    let numSteps = 20;
  
    for (let i=1.0; i<=numSteps; i++) {
      let ratio = i/numSteps;
      thresholds.push(ratio);
    }
  
    thresholds.push(0);
    return thresholds;
  }

  handleIntersect(entries, observer) {
    const numSteps = 20.0;

    let boxElement;
    let prevRatio = 0.0;
    let increasingColor = "rgba(40, 40, 190, ratio)";
    let decreasingColor = "rgba(190, 40, 40, ratio)";
    entries.forEach((entry) => {
      if (entry.intersectionRatio > prevRatio) {
        entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
      } else {
        entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
      }
  
      prevRatio = entry.intersectionRatio;
    });
  }
  
}
