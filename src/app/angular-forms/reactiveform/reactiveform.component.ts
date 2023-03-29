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
      cb:[false, Validators.requiredTrue],
       Gender:['male',[Validators.required]],
      //  date:['',Validators.requiredTrue],
       email:['', [Validators.required]]
    })
  }
  submit(){
  
    console.log(this.studentDataForm.value);
    
  }
}
