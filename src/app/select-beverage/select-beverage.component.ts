import { Component, OnInit } from '@angular/core';
import { BeverageListService } from "../beverage-list.service";
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
	
	constructor(public beverageService: BeverageListService,
				public service:LocalStorageService) { }
	getBeveragelist(){
		this.service.getBeveragelist(this.defaultBeverages)
		// this.defaultBeverages = this.beverageService.defaultBeverages
		// console.log(this.defaultBeverages);
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
	userChoice(selectedChoise){	
		// let selectedChoise = beverage.name;
		// let selectedChoise = { name: beverage.name};
		// let selectedBoolean = {drinkSelectedBoolean: true};
		// this.selectedDrink.push(selectedBoolean);
		// this.selectedDrink.push(selectedChoise);
		this.service.setSelectedDrink(selectedChoise)
		console.log(selectedChoise);
		
	}
	ngOnInit() {
		this.getBeveragelist()
		this.defaultBeverages = this.service.defaultBeverages
		console.log(this.defaultBeverages);
		
	}

}
