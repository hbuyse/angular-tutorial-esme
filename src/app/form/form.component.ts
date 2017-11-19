import { Component, OnInit, Input } from '@angular/core';

@Component({
  templateUrl: './form.component.html',
  selector: 'app-form', // Name of the HTML element
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input('title') submitTitle;

  public username = '';
  public password = '';
  public confirmPassword = '';
  public isRegister = false;

  constructor() {
  }

  ngOnInit() {
  }

  public submit() {

  }

  public reset() {
    this.password = '';
    this.username = '';
  }
}
