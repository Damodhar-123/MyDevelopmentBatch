import { Component } from '@angular/core';
import { CheckboxRequiredValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { __values } from 'tslib';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
 studentDataForm!: FormGroup;
 showPassword : boolean = false;
  password: any;
  // isMatched: boolean;
  confirmPassword: any;
  isMatched: boolean= false;

  constructor( private formBuilder: FormBuilder){
    
  }
  ngOnInit(){
    this.studentForm();
  }
  studentForm(){
    this.studentDataForm = this.formBuilder.group({
      firstname :['',[Validators.required,Validators.minLength(2),Validators.pattern('[A-Za-z]*')]],
      lastname :['',[Validators.required , Validators.minLength(3)]],
      mobile:['',[ Validators.required, Validators.minLength(10),Validators.pattern('[0-9]*'),Validators.maxLength(10)]],
      address:['',[ Validators.required, Validators.pattern('[A-Za-z0-9 -]*')]],
      password:['',[Validators.required,Validators.minLength(8),Validators.pattern('[a-z0-9@#$-]*$')]],
      confirmpass:['',[Validators.required]],
      cb:['', [Validators.requiredTrue]],
       Gender:['male',[Validators.required]],
        date:['',Validators.required],
       email:['', [Validators.required]]
    })
    
  }
  submit(){
  
    console.log(this.studentDataForm.value);
    
  }
  passwordValition(inputPassword:any){
    console.log('pass',inputPassword.target.value);
    this.password = inputPassword.target.value;
    if(this.password ==  this.confirmPassword  ){
      this.isMatched = false;
    }
    else{
     this.isMatched = true;
    }

}

confirmPasswordValition(confirmPass:any){
   this.confirmPassword = confirmPass.target.value;
   if(this.password ==  this.confirmPassword  ){
     this.isMatched = false;
   }
   else{
    this.isMatched = true;
   }
}
showPasswordFun(){
  this.showPassword =!this.showPassword;
}

}
