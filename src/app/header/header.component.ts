import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  public x = 5;
  public users = [{
    name: 'Anton',
  }, {
    name: 'Kirill',
  }, {
    name: 'Vasya',
  }, {
    name: 'Petya',
  },];
  public myClass = 'red';
  public myColor = 'red';
  public isShow = true
  public array = [1, 2, 3, 4]

  public selectedUser

  constructor() {
    setTimeout(() => {
      this.myClass = 'green';

      setTimeout(() => {
        this.myClass = 'blue';
      }, 2000);
    }, 2000);
  }

  random() {
    return Math.random();
  }

  ngOnInit() {

  }

  changeColor(color) {
    this.myColor = color;
  }

  select(user) {
    this.selectedUser = user
  }
}
