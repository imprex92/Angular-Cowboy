import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from "../localStorage.service";
@Component({
	selector: 'app-the-usual',
	templateUrl: './the-usual.component.html',
	styleUrls: ['./the-usual.component.css']
})
export class TheUsualComponent implements OnInit {
	constructor(public service:LocalStorageService) { }
	
	fetchUsualDrink:string;
	
	
	@Output() fetchTheUsual = new EventEmitter<string>();
	
	fetchUsual(){
		this.fetchTheUsual.emit(this.fetchUsualDrink);
	}
	
	
	
	getTheUsualDrink(){ 
		this.fetchUsualDrink = this.service.getTheUsualDrink()
		console.log('I getSelecktedDrink()-funktionen ', this.fetchUsualDrink);
		
	}
	
	ngOnInit() {
		this.getTheUsualDrink();
		console.log('I ngOnInit()-funktionen ', this.fetchUsualDrink);
		
	}

}
