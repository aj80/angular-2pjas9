import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'my-app-comp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    of(100, 20, 30).subscribe({
      next: (item) => {
        console.log('new item is ', item);
      },
      error: (err) => {
        console.log('Error occured ');
      },
    });

    this.register('aa').subscribe((x) => {
      console.log('guest selected');
    });
  }

  public register(guest: string): Observable<number> {
    if (guest) {
      return of(0);
    } else {
      return of(1);
    }
  }
}
