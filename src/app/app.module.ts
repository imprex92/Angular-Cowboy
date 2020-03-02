import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StorageComponent } from './storage/storage.component';
import { LocalStorageService } from "./localStorage.service";
@NgModule({
   declarations: [
      AppComponent,
      StorageComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [LocalStorageService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
