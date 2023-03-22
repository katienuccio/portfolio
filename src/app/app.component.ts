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
  });

  isSideNavOpen = false;


  scrollTo(id: string) {
    this.isSideNavOpen = false;
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100)
  }

  submitForm() {
    this.form.markAllAsTouched();
    console.log(this.form);
  }

  openSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }
}
