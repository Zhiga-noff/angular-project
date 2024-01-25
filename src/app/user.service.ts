import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private users = [
    { name: 'Kirill' },
    { name: 'Antnon' },
    { name: 'Vasya' },
    { name: 'Dasha' },
  ];

  constructor(private _http: HttpClient) {}

  get getAll() {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  remove(name: string) {
    return (this.users = this.users.filter((user) => user.name !== name));
  }

  add(name: string) {
    this.users.push({ name });
  }
}
