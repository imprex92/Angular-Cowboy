import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from "../localStorage.service";
import { Beverages } from "../beverages";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
	@Input() public message:string;
	@Input() public customerKnownBoolean:boolean
	title:string = 'Angular-Cowboy';
	clickedButton: boolean = false;
	formSubmitted: boolean = false;
	haveUsualDrink:boolean
	firstName: string = '';
	lastName: string = '';	
	message1: string = "Howdy, stranger. Haven't seen your face around here before. What's your name?";
	selectedDrink: Beverages;
	drinkWithText:string;
	theUsualBtn;
	theSelectedUsual:string = ""

  constructor(public service:LocalStorageService) { }
  
  firstNameInput(event){
		let input = event.target;
		let value = input.value;
		this.firstName = value;
		console.log(this.firstName)
	}
	lastNameInput(event){
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
	handleTheSelected(theSelectedDrink){		
		this.selectedDrink = theSelectedDrink.name;
		this.theUsualBtn = theSelectedDrink.name;		
		let drinkReadyTxt = ' coming right up!'
		this.drinkWithText = 'Awesome ' + this.selectedDrink + drinkReadyTxt
		console.log("the dia comp handleSelected()", this.selectedDrink);
	}
	theUsualButton(value){		
		this.theUsualBtn = this.service.getSelectedDrink()
		console.log('detta är i knappen nu', this.theUsualBtn);		
		console.log("value: ",value.target.value);
		this.theSelectedUsual = 'The usual ' + this.theUsualBtn.name + ' comming up!'
	}
	getTheUsualButton(){
		if(this.theUsualBtn == null || this.theUsualBtn == undefined){
			this.theUsualBtn = this.service.getTheUsualDrink()
		}
	}
	

  	ngOnInit() {
		this.getStorageItem()
		this.service.getBeverageList()
		this.haveUsualDrink = this.service.getTheUsualBoolean()
		this.getTheUsualButton()	
		
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
