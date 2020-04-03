import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Beverages } from '../beverages';
import { LocalStorageService } from "../localStorage.service";

@Component({
	selector: 'app-select-beverage',
	templateUrl: './select-beverage.component.html',
	styleUrls: ['./select-beverage.component.css']
})
export class SelectBeverageComponent implements OnInit {
	
	customDrink:string;
	drinkValue:string = name;
	defaultBeverages:Beverages[]
	selectedDrink =  [];
	
	constructor(
		public service:LocalStorageService) { }
	getBeveragelist(){
		this.service.getBeveragelist(this.defaultBeverages)
	}
	customDrinkInput(event){
		let input = event.target;
		let value = input.value;
		this.customDrink = value;
		console.log(this.customDrink);
	}
	submitDrink(){
		let selectedBeverage = {name: this.customDrink};		
		console.log('selected ' + selectedBeverage, 'drink ' + this.customDrink);
		this.defaultBeverages.push(selectedBeverage)
		console.log(selectedBeverage);		
	}
	saveDrink(customDrink){
		customDrink = this.customDrink
		this.service.saveDrink(customDrink)
	}
	@Output() choosenDrink = new EventEmitter<Beverages>()
	userChoice(selectedChoise){			
		this.service.setSelectedDrink(selectedChoise)
		this.choosenDrink.emit(selectedChoise)
		console.log(selectedChoise);		
	}
	ngOnInit() {
		this.getBeveragelist()
		this.defaultBeverages = this.service.defaultBeverages
		console.log(this.defaultBeverages);		
	}

}
