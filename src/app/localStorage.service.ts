import { Injectable } from '@angular/core';
// import { AppComponent } from './app.component';

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {
	private firstName: string;
	private lastName: string;
	private values: string;
	setLocalStorage(firstName, lastName):any {
		this.firstName = firstName
		localStorage.setItem('Name', JSON.stringify(firstName));
		this.lastName = lastName
		localStorage.setItem('LastName', JSON.stringify(lastName));
	}
	getLocalStorage(values):any{
		if (localStorage.length > 0) {
			// We have items
			console.log('LocalStorage is not empty')
			this.appComponent.getStorageItem(values)
		  } else {
			console.log('localStorage is empty')
		  }
		this.values = values;
		console.log(values)
	}


constructor(public appComponent: AppComponent) { }

}
