import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from "../localStorage.service";
@Component({
	selector: 'app-the-usual',
	templateUrl: './the-usual.component.html',
	styleUrls: ['./the-usual.component.css']
})
export class TheUsualComponent implements OnInit {
	constructor(public service:LocalStorageService) { }
	theUsualDrink: string;
	fetchUsualDrink:object;
	test;
	
	@Output() fetchTheUsual = new EventEmitter<object>();
		fetchUsual(){
			this.fetchTheUsual.emit(this.fetchUsualDrink);
		}
	
	
	
	getTheUsualDrink(){ //TODO Här har Karin gjort dumheter! xD
		this.theUsualDrink = this.service.getTheUsualDrink()
		console.log('I getSelecktedDrink()-funktionen ', this.test);
		
	}
	
	ngOnInit() {
		this.getTheUsualDrink();
		console.log('I ngOnInit()-funktionen ', this.test);
		
	}

}
