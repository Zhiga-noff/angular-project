import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users;

  constructor(private _useService: UserService) {}

  ngOnInit() {
    this.users = this._useService.getAll.subscribe(
      (users) => (this.users = users),
    );
  }

  removeUser(name: string) {
    this._useService.remove(name);
    this.users = this._useService.getAll;
  }

  addUser(name: string) {
    if (!name) {
      return;
    }
    this._useService.add(name);
    this.users = this._useService.getAll;
  }
}
