import { Component } from '@angular/core';

@Component({
  selector: 'app-administrator-login',
  templateUrl: './administrator-login.component.html',
  styleUrls: ['./administrator-login.component.css']
})
export class AdministratorLoginComponent {

  userName=""
  password=""


  readValues=()=>
  {
    let data:any={
      "userName":this.userName,
      "password":this.password
    }
    console.log(data)
  }

}
