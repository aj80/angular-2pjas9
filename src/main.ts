import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { map, of, take, tap } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';

  constructor() {
    of(10, 20, 30).subscribe({
      next: (item) => {
        console.log('new item is ', item);
      },
      error: (err) => {
        console.log('Error occured ');
      },
    });

    of(10, 20, 30)
      .pipe(
        map((item) => item * 2),
        tap((item) => console.log('itemzz', item)),
        take(3)
      )
      .subscribe((item) => console.log('sub item is ', item));
  }
}

bootstrapApplication(App);
