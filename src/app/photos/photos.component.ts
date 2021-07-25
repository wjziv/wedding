import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.sass']
})
export class PhotosComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  counter(i: number) {
    return new Array(i);
  }

}
