import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private _route: Router) {}

  goToUser(userId) {
    // this._route.navigate(['users', userId]);
    this._route.navigateByUrl('users/' + userId, { skipLocationChange: true });
  }
}
