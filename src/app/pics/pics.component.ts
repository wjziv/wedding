import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styleUrls: ['./pics.component.sass']
})
export class PicsComponent {
  test = [{
    a: 'abc',
    b: 'def'
  }];

  counter(i: number) {
    return new Array(i);
  }

}
