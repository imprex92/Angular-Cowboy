import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "../localStorage.service";
import { Beverages } from "../beverages";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
	title = 'Angular-Cowboy';
	clickedButton: boolean = false;
	formSubmitted: boolean = false;
	customerKnownBoolean: boolean;
	firstName: string = '';
	lastName: string = '';
	message: string;
	message1: string = "Howdy, stranger. Haven't seen your face around here before. What's your name?";
	usualDrink: Beverages;
	selectedDrink: Beverages;
	theUsual1: string;
	drinkWithText:string;

  constructor(public service:LocalStorageService) { }
  
  firstNameInput(event){
		// console.log('key up event: ', event);
		let input = event.target;
		let value = input.value;
		this.firstName = value;
		console.log(this.firstName)
	}
	lastNameInput(event){
		// console.log('key up event: ', event);
		let input = event.target;
		let value = input.value;
		this.lastName = value;
		console.log(this.lastName);
	}
	handleSaveName(){
		this.service.setLocalStorage(this.firstName, this.lastName, this.customerKnownBoolean);
		console.log(this.lastName);
		this.clickedButton = true;
		this.formSubmitted = true;
		this.customerKnownBoolean = true;
		this.message = 'Ah, Can I get you something Warlock ' + this.lastName + '?'
	}
	getStorageItem(){
		this.service.getLocalStorage(this.lastName, this.firstName, this.customerKnownBoolean)
		console.log(this.firstName, this.lastName)
	}

	//TODO @Output problem

	handleTheUsual(theUsualDrink:Beverages){		//TODO Funktionen som tar hand om @Outputen från Usual Child
		this.usualDrink = theUsualDrink
		console.log( 'this is the usual that you wanted last time' + this.usualDrink);

		this.theUsual1 = "The usual - " + this.selectedDrink +" coming up";
		
	}
	handleTheSelected(theSelectedDrink){
		
		this.selectedDrink = theSelectedDrink.name;
		let drinkReadyTxt = ' coming right up!'
		this.drinkWithText = 'Awesome ' + this.selectedDrink + drinkReadyTxt
		console.log("the dia comp handleSelected()", this.selectedDrink);
	}
  	ngOnInit() { //! Någonting gå illa här!
		this.getStorageItem()
		this.service.getBeverageList()
	

	
		
		
		if(!this.getStorageItem){
			console.log('Nothing is inside storage ', localStorage.LastName, localStorage.customerKnownBoolean);
			this.customerKnownBoolean = false;
			this.message = "Howdy, stranger. Haven't seen your face around here before. What's your name?";
		}else if(this.getStorageItem){
			console.log('This is inside storage ', localStorage.Name, localStorage.LastName);
			this.firstName = localStorage.Name;
			this.lastName = localStorage.LastName;
			this.customerKnownBoolean = localStorage.customerKnownBoolean;
			console.log(this.customerKnownBoolean, this.firstName, this.lastName);			
			this.message = 'Hello again, Mr/Mrs. ' + this.lastName;
		}
    	
	}

}
