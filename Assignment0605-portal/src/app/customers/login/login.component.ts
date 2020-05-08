import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import{HttpClient,HttpParams,HttpHeaders}from '@angular/common/http';
import{Router}from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginFormGroup:FormGroup;
  result: any;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.LoginFormGroup=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }

  Login(){
    if(this.LoginFormGroup.valid){
      let header=new HttpHeaders();
      header=header.append('Email',this.LoginFormGroup.value.email);
      header=header.append('Password',this.LoginFormGroup.value.password);
     
    this.http.get<any>('https://localhost:44303/api/Customer',{headers:header}).subscribe(res=>{
        console.log(res);
        this.result=res;
        sessionStorage.setItem("id",this.result)
        this.router.navigateByUrl("/products")
      });
    }
  }

}
