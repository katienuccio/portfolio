import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { collection, addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private db = getFirestore(initializeApp(environment.firebase));

  form = new UntypedFormGroup({
    name: new UntypedFormControl('', Validators.required),
    email: new UntypedFormControl('', Validators.required),
    message: new UntypedFormControl('')
  });
  loading = false;
  isSideNavOpen = false;

  constructor() {}

  scrollTo(id: string) {
    this.isSideNavOpen = false;
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100)
  }

  async submitForm() {
    if (this.form.valid) {
      this.loading = true;
      try {
        const docRef = await addDoc(collection(this.db, 'messages'), {
          ...this.form.value,
          timestamp: new Date()
        });
        alert('Message sent successfully!');
        this.form.reset();
      } catch (error) {
        console.error('Error sending message:', error);
        alert('An error occurred while sending the message. Please try again later.');
      } finally {
        this.loading = false;
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  openSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }
}
