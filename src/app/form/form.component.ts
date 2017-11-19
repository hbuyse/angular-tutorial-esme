import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './form.component.html',
  selector: 'app-form', // Name of the HTML element
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public username = '';
  public password = '';
  public confirmPassword = '';
  public submitTitle = 'Form';
  public isRegister = false;

  constructor() {
  }

  ngOnInit() {
  }

  public submit() {

  }

  public reset() {

  }
}
