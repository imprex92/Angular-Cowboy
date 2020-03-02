import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "./localStorage.service";
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'Angular-Cowboy';
	newWelcome = "Howdy, stranger. Haven't seen your face around here before. What's your name?"
	oldWelcome = "Hello again, Mr/Mrs.";
	firstName: string = '';
	lastName: string = '';
	customerKnownBoolean: boolean = false;


	constructor(public service:LocalStorageService){}

	

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
		this.service.setLocalStorage(this.firstName, this.lastName);
		console.log(this.lastName);
	}
	getStorageItem(values){
		
	}
	
	
	
	
	ngOnInit():void{
		
		// if (localStorage.length > 0) {
		// 	// We have items
		// 	this.getStorageItem()
		// 	console.log('LocalStorage is not empty')
		//   } else {
		// 	console.log('localStorage is not empty')
		//   }
	}
}
