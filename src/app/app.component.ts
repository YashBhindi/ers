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

  
  appendRadioJson(dat) {
    
    console.log("Components")
    console.log(this.components)
    this.components.push({"type" : "radio",
    "data" : dat});
  }
   
  appendTextJson(dat) {
    
    console.log(dat)
    this.components.push({"type" : "text",
    "data" : dat});
  }
 
}

