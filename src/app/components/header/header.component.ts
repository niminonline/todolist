import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  greeting!: string;
  day!:string;
  constructor() {}

  getGreeting() {
    let now = new Date();
    let hour = now.getHours();
    let period = '';
    switch (true) {
      case hour >= 0 && hour < 12:
        period = 'Morning 🌤️';
        break;
      case hour >= 12 && hour < 16:
        period = 'Afternoon ☀️';
        break;
      case hour >= 16 && hour < 19:
        period = 'Evening 🌇';
        break;
      case hour >= 19 && hour < 24:
        period = 'Evening 🌙';
        break;

      default:
        period = 'Morning';
    }
    return period;
  };

  getDay(){
    const date= new Date();
    return date.toLocaleDateString('en-IN',{weekday:"long"})

  }

  ngOnInit(): void {
    this.greeting = this.getGreeting();
    this.day= this.getDay();
  }


}
