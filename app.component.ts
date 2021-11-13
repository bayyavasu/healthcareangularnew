import { Component, ElementRef, ViewChild } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import{HttpClient} from '@angular/common/http';
import { Identifiers } from '@angular/compiler';
import { DOCUMENT, NgStyle } from '@angular/common';
import {Inject } from '@angular/core';
import { ParentComponent } from './slokam/parent/parent.component';
interface Patient{
id:number;
name:String;
age:number;
phone:String;
email:String;

}
class ERROR {
 
   constructor(public   errorId:number ,
      public  errorMessage:String,
      public  exception:any){

   }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
parentData="hii";
  error:any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  patients:any;

count:number=0;
  
  patientFormGroup:FormGroup;
  ;
  visitingInfo:any;
//  firstNameAutofilled: any;
  //lastNameAutofilled: any;


  constructor(private httpClient:HttpClient, @Inject(DOCUMENT) private _document: Document)
  {

   
    this.patientFormGroup=new FormGroup(
      {
id:new FormControl("",[]),
name:new FormControl("",[]),

age:new FormControl("",[]),

phone:new FormControl("",[]),
email:new FormControl("",[]),

      }
      );
   
     
  }
  
  
  @ViewChild("one")
  divdataa!: ElementRef;
changeContent()
  {
//this.divdataa.nativeElement.innerText="hii";
this.divdataa.nativeElement.innerHTML="<h1>hii</h1>";  
}


@ViewChild("two")
data2!:ParentComponent;
callparent()
{
this.data2.parentmethod()
}

  k()
  {
    this.count=this.count+1;
  }
  get d()
  {
    return this.patientFormGroup.controls;
  }
  
  save(){
    console.log(this.patientFormGroup.value);
    this.httpClient.post("http://localhost:5050/patient/register",this.patientFormGroup.value)
    .subscribe(
      (sucess)=>{console.log(sucess)},
      (failure)=>{console.log(failure)}
    );
} 
 name:String="register";

 getAll()
{
  this.httpClient.get<Patient[]>("http://localhost:5050/patient/getAll").subscribe(
    (a)=>{console.log(a)
    this.patients=a;
    
    },
    (a)=>{console.log(a)}
  )
}
update(id:number)
{
console.log(id);
this.httpClient.get<Patient>("http://localhost:5050/patient/getByID/"+id).subscribe(
  (a)=>
  {console.log(a)
  this.d.id.setValue(a['id']);
  this.patientFormGroup.controls.name.setValue(a['name']);
  this.d.age.setValue(a['age']);
  this.d.email.setValue(a['email']);
  this.d.phone.setValue(a['phone']);
  this.name="save changes";
  },
  (b)=>{console.log(b)}
)
}
getEven()
{
  this.httpClient.get("http://localhost:5050/patient/getAllevenPatients").subscribe((a)=>{console.log(a)  
  this.patients=a },
  (a)=>{console.log(a)}
  
  )

}

displayVisitings(id:number)
{
  this.httpClient.get<any>("http://localhost:5050/visitings/ById/"+id).subscribe((a)=>{console.log(a)
this.visitingInfo=a},
  (a)=>{console.log(a)}
  )
}


clearVisitings()
{
  this.visitingInfo=null;
}
uploadFile:any;
fileevent(event:any)
{
//console.log(event.target.files[0]);
this.uploadFile = event.target.files[0];
}

saveFile()
{
  var formData:FormData=new FormData();
  formData.append("patientImage",this.uploadFile);
  this.httpClient.post("http://localhost:5050/patient/saveImage",formData).subscribe(

  (a)=>{console.log(a)
  
  },(a)=>{ console.log(a.error);
    this.error =a.error;}
  )
}



delete(id:any)
{
  this.httpClient.delete("http://localhost:5050/patient/deletePatient/"+id).subscribe(
(a)=>{console.log(a)
  window.location.reload();
  
},(b)=>{console.log(b)}

  )
}






}
