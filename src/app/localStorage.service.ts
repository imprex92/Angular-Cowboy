import { Injectable } from '@angular/core';



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
	getLocalStorage(lastName: string, firstName: string):string {
		

		if (localStorage.length > 0) {
			// We have items
			let firstName = localStorage.getItem('Name')
			if(?) {

			}
			let name = localStorage.getItem('LastName');
			if(?){
				
			}
			console.log(localStorage.Name);
			
			console.log('LocalStorage is not empty')
		
			return name + firstName;
			
			
		  } else {
			console.log('localStorage is empty')
			return undefined
		  }

	}




}
