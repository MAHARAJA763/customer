import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterFormGroup:FormGroup;
  result: any;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.RegisterFormGroup=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      contact:['',Validators.required],
      address:['',Validators.required],
      gender:['',Validators.required],
      dob:['',Validators.required]
    })
  }

  register(){
    this.http.post<any>('https://localhost:44303/api/Customer',{FirstName:this.RegisterFormGroup.value.fname,LastName:this.RegisterFormGroup.value.lname,MobileNumber:this.RegisterFormGroup.value.mobileNumber,Email:this.RegisterFormGroup.value.email,Password:this.RegisterFormGroup.value.password,Address:this.RegisterFormGroup.value.address,Gender:this.RegisterFormGroup.value.gender,DOB:this.RegisterFormGroup.value.dob}).subscribe(res=>{
      console.log(res);
      
    });
    this.router.navigate(['/']);
  }

}
