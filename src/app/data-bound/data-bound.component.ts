import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bound',
  templateUrl: './data-bound.component.html',
  styleUrls: ['./data-bound.component.css']
})
export class DataBoundComponent implements OnInit {

  username = '';

  constructor() { }

  ngOnInit(): void {
  }

  resetName() {
    this.username = '';
  }

}
