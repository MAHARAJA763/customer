import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  ProductFormGroup:FormGroup;
  constructor(private formbuilder:FormBuilder,private router:Router,private http:HttpClient)
    {}
    ngOnInit(){
      this.  ProductFormGroup=this.formbuilder.group({
        pname:['',Validators.required],
        pprice:['',Validators.required],
        status:['',Validators.required],
        pcode:['',Validators.required],
       
  });
  
    }
    Add()
    {
      this.http.post<any>('https://localhost:44303/api/Product',{ProductName:this.ProductFormGroup.value.pname,ProductCode:this.ProductFormGroup.value.pcode,ProductPrice:this.ProductFormGroup.value.pprice,ProductStatus:this.ProductFormGroup.value.status}).subscribe(res=>{
          console.log(res);
          
        });
        this.router.navigate(['/productlist']);
      }
    
}
