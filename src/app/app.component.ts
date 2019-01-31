import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ers';




  components = [

    
  ]
  temp = {
    "type": "radio",
      "data": {
        "question": "",
        "name": "",
        "labels": []
      }
  }
  temp1 = {
    "type": "text",
      "data": {
        "question": "",
        "name": "",
        "labels": []
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

