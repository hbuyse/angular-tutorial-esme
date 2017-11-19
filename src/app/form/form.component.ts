import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './form.component.html',
  selector: 'app-form', // Name of the HTML element
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public username = '';
  public show = false;
  public myList: any[];

  constructor() {
    this.myList = [{name: 'Saab'}, {name: 'Volvo'}, {name: 'BMW'}];
  }

  ngOnInit() {
  }

}
