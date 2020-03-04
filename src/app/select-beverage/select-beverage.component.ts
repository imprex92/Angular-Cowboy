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
  constructor(public beverageService: BeverageListService,
              public service:LocalStorageService) { }
  getBeveragelist(){
    this.beverageService.getBeveragelist(this.defaultBeverages)
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
    let selectedBeverage = {name}; //! Här blir det fel! :never
    selectedBeverage[this.drinkValue] = this.customDrink;
    console.log('selected ' + selectedBeverage, 'drink ' + this.customDrink);
    
    this.defaultBeverages.push(selectedBeverage)
    console.log(selectedBeverage);
    
  }
  saveDrink(customDrink){
    customDrink = this.customDrink
    this.service.saveDrink(customDrink)
  }
  ngOnInit() {
    this.getBeveragelist()
    this.defaultBeverages = this.beverageService.defaultBeverages
    console.log(this.defaultBeverages);
  }

}
