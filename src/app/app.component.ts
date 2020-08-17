import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Max';
  displayData = false;
  timestamps = [];
  displayCounter = false;

  onDisplayDataClick() {
    this.displayData = !this.displayData;
    const dateString = new Date().toDateString();
    this.timestamps.push(dateString);
    if(this.timestamps.length >= 5) {
      this.displayCounter = true;
    }
  }
}
