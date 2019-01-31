import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import {Renderer , ElementRef} from  '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'ers';
  components = [  ]
  componentList : FormGroup;
  com: FormArray;
  d1:ElementRef;
  htmlToAdd ;
  constructor(private fb: FormBuilder,private renderer:Renderer) {
    this.componentList = this.fb.group({
      com: this.fb.array([])
    });
   }

  renderRadioComponent(){
    this.com=(this.componentList.get('com') as FormArray);
    this.com.push(this.fb.group({
      type : "radio",
      question: [''],
      name: [''],
      labels: this.fb.array([])
    }));
   }
   renderTextComponent(){
    this.com=(this.componentList.get('com') as FormArray);
    this.com.push(this.fb.group({
      type : "text",
      ques: [],
      answer: []
    }));
    
  }

  temp = {
    "type": "radio",
      "data": {
        "ques": "",
        "name": "",
        "labels": []
      }
  }
  temp1 = {
    "type": "text",
      "data": {
        "ques": "",
        "answer" : ""
      }
  }

  appendRadioJson(dat) {
    this.temp.data=dat;
    console.log(dat)
    this.components.push(this.temp);
  }
   
  appendTextJson(dat) {
    this.temp1.data=dat;
    console.log(dat)
    this.components.push(this.temp1);
  }
 



}

