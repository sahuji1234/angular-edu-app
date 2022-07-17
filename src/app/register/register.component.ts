import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User= new User();
  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
  }

  userRegister(){
  this.registerService.registerUser(this.user).subscribe(data=>{ alert('registration successfull')}, err=>{alert('registration failed')})
  }

}
