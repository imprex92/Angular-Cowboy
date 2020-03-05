import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StorageComponent } from './storage/storage.component';
import { LocalStorageService } from "./localStorage.service";
import { DialogComponent } from './dialog/dialog.component';
import { SelectBeverageComponent } from './select-beverage/select-beverage.component';
import { TheUsualComponent } from './the-usual/the-usual.component';
@NgModule({
   declarations: [
      AppComponent,
      StorageComponent,
      DialogComponent,
      SelectBeverageComponent,
      TheUsualComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [
      LocalStorageService,
      DialogComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
