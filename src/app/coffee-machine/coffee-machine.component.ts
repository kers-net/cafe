import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-coffee-machine',
  templateUrl: './coffee-machine.component.html',
  styleUrls: ['./coffee-machine.component.scss']
})
export class CoffeeMachineComponent implements OnInit {

  @Input() receivedCoffeeCups : number = 0;

  @Output() iNeedMoreCoffee = new EventEmitter();
  @Output() coffeeServed = new EventEmitter();

  numberOfCoffeeCups: number = 0;
  tresholdCoffeeCups: number = 3;

  constructor() { }

  ngOnInit(): void {
    this.numberOfCoffeeCups = this.receivedCoffeeCups;

  }

  serveCoffee()
  {
    console.log("Coffee Served");
    this.numberOfCoffeeCups--;
    this.coffeeServed.emit();
    if(this.numberOfCoffeeCups <= this.tresholdCoffeeCups)
   { this.iNeedMoreCoffee.emit('Please refill coffee');
      console.log("Coffee ordered");
      this.numberOfCoffeeCups = this.numberOfCoffeeCups + this.receivedCoffeeCups;
  }
  }

}
