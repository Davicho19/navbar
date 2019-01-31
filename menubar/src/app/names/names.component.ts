import { Component } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent {
  private zipCode: string;
  private loadCancellation: boolean;

  constructor() {
    // this.loadCancellation = false;
  }
  onSearch() {
    this.loadCancellation = true;
    console.log("cancellation is: " + this.loadCancellation);
  }
}
