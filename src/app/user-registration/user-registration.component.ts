import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  username=""
  password=""

  readValues=()=>
  {
    let data:any={

      "username":this.username,
      "password":this.password

    }
    console.log(data)
  }

}
