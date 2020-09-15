import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employees.interface';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {

  @Input() employee: Employee;
  constructor() { }

  ngOnInit(): void {
  }

}
