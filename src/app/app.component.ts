import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  form = new UntypedFormGroup({
    name: new UntypedFormControl('', Validators.required),
    email: new UntypedFormControl('', Validators.required),
    message: new UntypedFormControl('')
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
