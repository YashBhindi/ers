import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-get-text',
  templateUrl: './get-text.component.html',
  styleUrls: ['./get-text.component.css']
})
export class GetTextComponent implements OnInit {
  @Output() displayText : EventEmitter<any> = new EventEmitter<any>();
  registrationForm: FormGroup;
  submitted = false;
  text: FormArray;

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.registrationForm = this.fb.group({
      ques: [],
      answer: []
    });
  }
  
  
  addText() {
    this.text.push(this.registrationForm);
  }


  onSubmit() {
    console.log("submit");
    this.submitted = true;
    this.displayText.emit(this.registrationForm.value);


  }
}
