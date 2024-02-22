import { Injectable, Signal, signal, WritableSignal, computed  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalsService {

  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  constructor() { }

  increment()
  {
    this.count.update((value) => value +1);
    console.log(this.count());
  }

  decrement()
  {
    if(this.count()>0)
    {
      this.count.update((value) => value -1);
      console.log(this.count());
    }
    else
    {
      alert('Minimum value for decrementation must be 1');
    }
  }

  getCount()
  {
    return this.count();
  }

  getComputed()
  {
    return this.count() * 2;
  }
}
