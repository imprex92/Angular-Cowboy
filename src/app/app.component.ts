import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	// forgottenStatement:string;
	public customerKnownBoolean: boolean = false;
	public messageFromEmit = '';
	// title = 'Angular-Cowboy';
		
	public setDataFromChild(data:string){
		this.messageFromEmit = data;
		
		
	}
	constructor(){}	
	
	ngOnInit():void{
		
		
	}
}
