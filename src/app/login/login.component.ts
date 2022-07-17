import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user: User = new User()
  constructor(private userService:LoginserviceService) { }

  ngOnInit(): void {
  }
  
  userLogin(){
   this.userService.userLogin(this.user).subscribe(data=>{
    alert('login successfully')
   },error=> alert('Sorry Enter correct email and password')
   )
  }

}
