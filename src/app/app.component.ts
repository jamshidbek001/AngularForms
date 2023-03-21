import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularForms';
  defauldCountry = 'india';
  firstname :string;
  lastname: string;
  email: string;
  gen: string;
  country: string;
  defaultGender = 'Male';

  gender = [
    {id:'1',value:'Male'},
    {id:'2',value:'Female'},
    {id:'3',value:'Other'}
  ]

  @ViewChild('myForm') form: NgForm;

  onSubmit() {
    console.log(this.form);
    this.firstname = this.form.value.personalDetails.firstname;
    this.lastname = this.form.value.personalDetails.lastname;
    this.email = this.form.value.personalDetails.email;
    this.gen = this.form.value.gender;
    this.country = this.form.value.country;

    this.form.reset();
  }

  setDefaultValues() {
    // this.form.value.personalDetails.firstname = 'John';
    // this.form.value.personalDetails.lastname = 'Smith';
    // this.form.value.personalDetails.email = 'john@gmail.com';
    // this.form.setValue({
    //   country:'',
    //   gender: '',
    //   hobbies: '',
    //   personalDetails: {
    //     firstname:'John',
    //     lastname:'Smith',
    //     email:'example@gmail.com',
    //   }
    // });

    this.form.form.patchValue({
      personalDetails: {
        firstname: 'John',
        lastname: 'Smith',
        email: 'example@gmail.com'
      }
    });
  }
}
