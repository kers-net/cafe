import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CafeComponent } from './cafe/cafe.component';
import { CoffeeMachineComponent } from './coffee-machine/coffee-machine.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeItemComponent } from './employee-item/employee-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CafeComponent,
    CoffeeMachineComponent,
    EmployeeListComponent,
    EmployeeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
