import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
   rating: number = 4;
  starWidth: number;
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    throw new Error('Method not implemented.');
  }



  constructor() {}
}
