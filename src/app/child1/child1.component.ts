import { Component } from '@angular/core';
import { SignalsService } from '../signals.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {

  constructor(private signalsService:SignalsService){}

  getCount()
  {
    return (this.signalsService.getCount());
  }

}
