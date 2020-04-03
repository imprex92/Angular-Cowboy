import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocalStorageService } from "./localStorage.service";
import { DialogComponent } from './dialog/dialog.component';
import { SelectBeverageComponent } from './select-beverage/select-beverage.component';
import { TheUsualComponent } from './the-usual/the-usual.component';
import { RightToBeForgottenComponent } from './right-to-be-forgotten/right-to-be-forgotten.component';
@NgModule({
   declarations: [
      AppComponent,
      DialogComponent,
      SelectBeverageComponent,
      TheUsualComponent,
      RightToBeForgottenComponent
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
