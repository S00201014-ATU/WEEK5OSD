import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { SignalsService } from './signals.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Child1Component, Child2Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OSD2024Week5S00201014';

  constructor(private signalsService:SignalsService){}


  increment()
  {
     this.signalsService.increment();

  }

  decrement()
  {
     this.signalsService.decrement();
  }
}
