import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }

   writeUserData(name, email, message) {
    firebase.database().ref('contact/' + name).set({
      name: name,
      email: email,
      message : message
    });
    console.log;
  }

  resetForm() {
    (document.getElementById('myForm') as HTMLFormElement).reset();
  }

}
