import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.scss']
})
export class CafeComponent implements OnInit {

  numberOfCoffeeCups : number = 8;
  ordersServed :Array<string> = [];

  constructor(private datePipe : DatePipe) { }

  ngOnInit(): void {
  }
  updateOrder(){
    this.ordersServed.unshift('Coffee served @ ' +
    this.datePipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss'));
  }

  refillCoffee(e){
    this.numberOfCoffeeCups =10;
    console.log('så er der kaffe');
    this.ordersServed.unshift('Coffee refilled @ ' +
    this.datePipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss'));
  }

}
