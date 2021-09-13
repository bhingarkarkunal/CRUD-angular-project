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
  flag:boolean=true;
  constructor(public common: CommanservicesService, ) {
  this.getEmployeeist();
   
  }
  getEmployeeist() {
    this.common.getRequest('employees').subscribe(response => {
      this.data = response;
      console.log(this.data);
        this.employeeList = this.data.Employees;
    });
  }

  submitEmployee(){
    console.log(this.employeeData);
    
    this.common.postRequest(this.employeeData,'employees').subscribe(response => {
      this.data = response;
      this.getEmployeeist();
      if (201 == response.status) {
        $('#form')[0].reset();
      }
    });
  }
  gototoEdit(empid:any){
    this.flag = false;
    this.common.getRequest('employees'+ '/'+empid).subscribe(response => {
      this.data = response;
      this.employeeData = this.data;
    });
  }
  gototoDelete(empid:any){
    this.flag = false;
    this.common.deleteRequest('employees'+ '/'+empid).subscribe(response => {
      this.data = response;
    });
    this.getEmployeeist();
  }
  updateEmployee(empid:any){
    //console.log("this.employeeData.id--->>",empid);
    this.common.putRequest(this.employeeData,'employees'+'/'+empid).subscribe(response => {
      this.data = response;
        $('#form')[0].reset();
        this.flag = true;
    });
    
    this.getEmployeeist();
  }
}
