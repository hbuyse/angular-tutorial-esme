import { Injectable } from '@angular/core';

@Injectable()
export class AuthentificationService {

  public _http: any;
  private userList: any[];
  private isAuth: boolean;
  public currentUser: object;

  constructor($http) {
    this._http = $http;
    this.userList = [];
    this.isAuth = false;
    this.currentUser = {};
  }

  isAuthenticated() {
    return this.isAuth;
  }

  login(username, password, callback) {
    let found = true;
    for (const user in this.userList) {
      if (this.userList[user].username === username) {
        if (this.userList[user].password === password) {
          this.isAuth = true;
          this.currentUser = this.userList[user];
          callback(true);
          found = false;
        }
      }
    }
    if (found) {
      callback(false);
    }
  }

  register(username, password, confirmPassword) {
    if (password === confirmPassword) {
      this.userList.push({username, password});
    }
  }

}
