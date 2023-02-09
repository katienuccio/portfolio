import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('')
  })

  getInTouch() {
    const element = document.getElementById('get-in-touch');
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  submitForm() {
    this.form.markAllAsTouched();
    console.log(this.form);
  }
}
