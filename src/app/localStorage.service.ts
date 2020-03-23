import { Injectable } from '@angular/core';
import { BeverageListService } from "./beverage-list.service";
import { Beverages } from './beverages';


@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {
	defaultBeverages: Beverages[] = [
		{name: 'Cowboy Martini'},
		{name: 'Texas Whiskey Revival'},
		{name: 'Ginger Rogers Cocktail'},
		{name: 'Mexican Mule'}
	]

	rightToBeForgotten(){
		localStorage.clear()
		localStorage.setItem('customerKnownBoolean', 'false')

	}
	isCustomerKnown(){
		return JSON.parse(localStorage.getItem('customerKnownBoolean'))
	}


	getBeverageList(){
		if(localStorage.getItem('defaultBeverages') == null || localStorage.getItem('defaultBeverages') == undefined){

			localStorage.setItem('defaultBeverages', JSON.stringify(this.defaultBeverages))

		}
		console.log(JSON.parse(localStorage.getItem('defaultBeverages')));
		return JSON.parse(localStorage.getItem('defaultBeverages'))
		
		
	}
	
	constructor(public beverageService: BeverageListService) { }
	private firstName: string;
	private lastName: string;
	private values: string;
	private customDrink: string
	private customerKnownBoolean: boolean;
	beverageList;
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
	setSelectedDrink(selectedChoise ){
		// let obj = {selectedChoise}
		// localStorage.setItem('selectedDrink', JSON.stringify(obj))
		localStorage.setItem('selectedDrink', JSON.stringify(selectedChoise))
		localStorage.setItem('haveUsualDrink', 'true')




		
		// localStorage.setItem('selectedDrink', selectedChoise);
	}
	getSelectedDrink(){
		return JSON.parse(localStorage.getItem('selectedDrink'))
	}
	getBeveragelist(defaultBeverages){
		
		return defaultBeverages
	}
	getTheUsualBoolean(){
		return JSON.parse(localStorage.getItem('haveUsualDrink'))
	}

	getTheUsualDrink(){		
		
		return JSON.parse(localStorage.getItem('selectedDrink'));
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
