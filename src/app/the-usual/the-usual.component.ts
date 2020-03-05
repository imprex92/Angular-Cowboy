import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "../localStorage.service";
@Component({
	selector: 'app-the-usual',
	templateUrl: './the-usual.component.html',
	styleUrls: ['./the-usual.component.css']
})
export class TheUsualComponent implements OnInit {
	constructor(public service:LocalStorageService) { }
	private selectedDrink: object[];
	test;
	getSelectedDrink(){ //TODO Här har Karin gjort dumheter! xD
		this.test = this.service.getSelectedDrink()
		console.log('I getSelecktedDrink()-funktionen ', this.test);
		
	}
	
	ngOnInit() {
		this.getSelectedDrink();
		console.log('I ngOnInit()-funktionen ', this.test);
		
	}

}
