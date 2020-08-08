import {FormGroup,FormControl, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {

  form =new FormGroup({
    Name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    radio: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
    postalCode: new FormControl('',Validators.required),
  })

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    alert(JSON.stringify(this.form.value))
  }

}
