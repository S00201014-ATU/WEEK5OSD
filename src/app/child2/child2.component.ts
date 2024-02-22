import { Component } from '@angular/core';
import { SignalsService } from '../signals.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {

  constructor(private signalsService:SignalsService){}

  getCount()
  {
    return (this.signalsService.getComputed());
  }

}
