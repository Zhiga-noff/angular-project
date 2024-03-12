import { Component } from '@angular/core';
import { ActivatedRoute, Event, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.route.queryParams.subscribe((params) => console.log(params));
    this.router.events.subscribe((event: Event) => console.log(event));
  }
}
