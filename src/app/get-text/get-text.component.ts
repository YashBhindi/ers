import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-get-text',
  templateUrl: './get-text.component.html',
  styleUrls: ['./get-text.component.css']
})
export class GetTextComponent implements OnInit {
  @Output() display : EventEmitter<any> = new EventEmitter<any>();
  registrationForm: FormGroup;
  submitted = false;
  text: FormArray;

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.registrationForm = this.fb.group({
      question: ["what is your name?"],
      answer: ["yash"]
    });
  }
  
  
  addText() {
    this.text.push(this.registrationForm);
  }


  onSubmit() {
    console.log("submit");
    this.submitted = true;
    this.display.emit(this.registrationForm.value);

    // stop here if form is invalid
   

  }
}
