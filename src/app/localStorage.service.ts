import { Injectable } from '@angular/core';



@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {
	private firstName: string;
	private lastName: string;
	private values: string;
	private customDrink: string
	private customerKnownBoolean: boolean;
	setLocalStorage(firstName:string, lastName:string, customerKnownBoolean:boolean):any {
		this.firstName = firstName
		localStorage.setItem('Name', firstName);

		localStorage.setItem('customerKnownBoolean', 'true')
		this.lastName = lastName
		localStorage.setItem('LastName', lastName);
	}
	saveDrink(customDrink:string){
		this.customDrink = customDrink;
		localStorage.setItem('name', customDrink)
		console.log(customDrink);
		
	}
	setSelectedDrink(selectedDrink){
		localStorage.setItem('selectedDrink', selectedDrink);
	}
	getSelectedDrink(){		
		
		return JSON.parse(localStorage.getItem('selectedDrink.value.name'));
	}
	getLocalStorage(firstName: string, lastName: string, customerKnownBoolean: boolean):string {
		

		if (localStorage) {
			// We have items
			let firstName = localStorage.getItem('Name')
			let lastName = localStorage.getItem('LastName');
			let customerKnownBoolean = localStorage.getItem('customerKnownBoolean')
			if(firstName == undefined && lastName == undefined) {
				return undefined;
			} else if(firstName == undefined || lastName){
				return undefined
			}else {
				return firstName + lastName + customerKnownBoolean;
			}
			
		} else {
			console.log('localStorage is empty')
			return undefined
		}

	}




}
