import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
name: string;
email: string;
message: string;
myForm: any;

  constructor() { }


  ngOnInit() {
  }

  writeUserData(n, e, m) {
    var info = {
      name: n,
      email: e,
      message : m
    };
    
    firebase.database().ref('contact/').child(n+'/').set(info);
  }

  resetForm() {
    (document.getElementById('myForm') as HTMLFormElement).reset();
  }

}
