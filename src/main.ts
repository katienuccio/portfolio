import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPIcViRaVid0q9lI2QPuRcBRRgBgYAolE",
  authDomain: "katie-nuccio-portfolio.firebaseapp.com",
  projectId: "katie-nuccio-portfolio",
  storageBucket: "katie-nuccio-portfolio.appspot.com",
  messagingSenderId: "750399836057",
  appId: "1:750399836057:web:58c5be8bc67d537f920d08",
  measurementId: "G-WJ9EWLDX3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
