import { Component, OnInit } from '@angular/core';
import { ContactusService } from '../contactus.service';
import { Contatcus } from '../contatcus';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  conatctUs :Contatcus = new Contatcus();
  constructor(private contactService:ContactusService) { }
  ngOnInit(): void {
  }

  contact(){
    this.contactService.conatctUs(this.conatctUs).subscribe(data=>{alert('your query submitted successfully')},err=>{alert('submission failed')})
  }

}
