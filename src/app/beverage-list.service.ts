import { Injectable } from '@angular/core';
import { Beverages } from './beverages';
import { LocalStorageService } from "./localStorage.service";
@Injectable({
	providedIn: 'root'
})
export class BeverageListService {
	defaultBeverages: Beverages[] = [
		{name: 'Cowboy Martini'},
		{name: 'Texas Whiskey Revival'},
		{name: 'Ginger Rogers Cocktail'},
		{name: 'Mexican Mule'}
	]
constructor() { }
	// getBeveragelist(defaultBeverages){
		
	// 	return defaultBeverages
	// }
	// setBeverageList(){
		
	// }
}
