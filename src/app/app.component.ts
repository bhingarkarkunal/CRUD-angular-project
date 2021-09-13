import { Component } from '@angular/core';
import { CommanservicesService } from './services/commanservices.service';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';
  employeeData:any={};
  data:any={};
  employeeList:any=[];
  constructor(public common: CommanservicesService, ) {
  this.getEmployeeist();
   
  }
  getEmployeeist() {
    this.common.getRequest('employees').subscribe(response => {
      this.data = response;
      console.log(this.data);
      
      if (200 == response.status) {
        this.employeeList = this.data.result;
      }
    });
  }

  submitEmployee(){
    console.log(this.employeeData);
    
    this.common.postRequest(this.employeeData,'employees').subscribe(response => {
      this.data = response;
      if (201 == response.status) {
        $('#form')[0].reset();
      }
    });
  }
}
