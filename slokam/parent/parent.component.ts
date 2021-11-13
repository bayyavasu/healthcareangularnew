import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
@Input()
name:any;
  ngOnInit(): void {
  }


  parentmethod()
{
  alert("hii")
}
}





