import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {
	private firstName: string;
	private lastName: string;
	setLocalStorage(firstName, lastName):any {
		this.firstName = firstName
		localStorage.setItem('Name', JSON.stringify(firstName));
		this.lastName = lastName
		localStorage.setItem('LastName', JSON.stringify(lastName));
	}


constructor() { }

}
