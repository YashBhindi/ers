import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ers';



  components = [

    {
      "type": "radio",
      "data": {
        "question": "qwewq",
        "name": "ta",
        "labels": ["re","qwe"]
      }          
    }
    ,
    {
      "type": "text",
      "data": {
        "question": "what is your name?",
        "answer": "yash"
      }
    },
    {
      "type": "radio",
      "data": {
        "question": "coding",
        "name": "tea",
        "labels": ["weq","qwew","qwewqe"]
      }
    }
  ]







}

