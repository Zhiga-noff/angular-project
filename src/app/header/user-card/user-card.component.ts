import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input('user') user
  @Output() userSelected: EventEmitter<any> = new EventEmitter

  constructor() {
  }

  ngOnInit() {
  }

  selectUser() {
    this.userSelected.emit(this.user)
  }
}
