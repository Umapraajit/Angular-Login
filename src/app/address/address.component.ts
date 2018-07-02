import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  navigate() {
  this.location.replaceState('address1');
  }

}
