import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "../localStorage.service";


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
  	ngOnInit() { // Någonting gå illa här!
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
