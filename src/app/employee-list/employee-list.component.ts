import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employees.interface';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

    employees: Employee[] = [{
    firstName: 'Kenneth',
    lastName: 'Rasmussen',
    email: 'ktr@jydeblank.dk',
    phone: '24806212',
    isBoss: true,
  },
  {
    firstName: 'Kim',
    lastName: 'Rasmussen',
    email: 'hej@katten.dk',
    phone: '12345678',
    isBoss: false,
  },
  {
    firstName: 'Mike',
    lastName: 'McDonald',
    email: 'sutMin@lige.nu',
    phone: '66600666',
    isBoss: false,
  }

]
  constructor() { }

  ngOnInit(): void {
  }

}
