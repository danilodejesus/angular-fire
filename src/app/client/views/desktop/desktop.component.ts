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
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.styl']
})
export class DesktopComponent implements OnInit {

  items: Observable<any[]>;
  form: FormGroup;
  age;

  private subForm: AngularFirestoreCollection<any>;

  constructor(
    private firestore: AngularFirestore,
    private fb: FormBuilder
  ) {
    this.items = firestore.collection('clients').valueChanges();
  }

  ngOnInit(): void {
    this.subForm = this.firestore.collection('clients');
    console.log(this.firestore.collection('clients'));

    let iterations = [];
    this.firestore.collection('clients').get().subscribe(val => {
      val.forEach(doc => {
        const edad = doc.data().age;
        iterations.push(edad);
        console.log(iterations);
        this.age = iterations;
      });
    });


    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  createClient(client): void {
    this.subForm.add(client).then(response => {
    }).catch(err => console.log(err));
    this.form.reset();
  }

}
