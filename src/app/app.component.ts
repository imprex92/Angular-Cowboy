import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	@Input() public forgottenStatement:string;
	@Input() public sendBoolean: boolean;
	// title = 'Angular-Cowboy';
	public fromForgottenMessage:string = 'Oh right! Who were you again?';
	public dataFromForgotten(event){
		this.fromForgottenMessage = event;
		console.log(this.fromForgottenMessage);
		
	}
	constructor(){}	
	
	ngOnInit():void{
		
		
	}
}
