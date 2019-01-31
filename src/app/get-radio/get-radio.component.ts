import { Component, OnInit ,Output ,EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-get-radio',
  templateUrl: './get-radio.component.html',
  styleUrls: ['./get-radio.component.css']
})
export class GetRadioComponent implements OnInit {

  @Output() display : EventEmitter<any> = new EventEmitter<any>();
  registrationForm: FormGroup;
  submitted = false;
  labels: FormArray;

  constructor(private fb: FormBuilder) {
    
    this.registrationForm = this.fb.group({
      question: [''],
      name: [''],
      labels: this.fb.array([])

    });
   }


  ngOnInit() {
    
  }
  get f() { return this.registrationForm; }

  getLabe() : FormGroup {
    return this.fb.group({
      option: ['good']
    });
  }
  addLabel() {
    this.labels=(this.registrationForm.get('labels') as FormArray);
    this.labels.push(this.getLabe())
  }


  onSubmit() {
    console.log("submit");
    this.submitted = true;
    console.log(this.registrationForm.value);
   // console.log(this.)
    this.display.emit(this.registrationForm.value);
    // stop here if form is invalid
    

  }
}
