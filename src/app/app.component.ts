import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

export class Client {
  name = '';
  lastName = '';
  age = '';
  date = '';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

  items: Observable<any[]>;
  form: FormGroup;

  private subForm: AngularFirestoreCollection<any>;

  constructor(
    private firestore: AngularFirestore,
    private fb: FormBuilder
  ) {
    this.items = firestore.collection('clients').valueChanges();
  }

  ngOnInit() {
    this.subForm = this.firestore.collection('clients')
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  createClient(client) {
    this.subForm.add(client).then(response => {
    }).catch(err => console.log(err));
    this.form.reset();
  }

}
