import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	public customerKnownBoolean: boolean = false;
	public messageFromEmit = '';
	public setDataFromChild(data:string){
		this.messageFromEmit = data;		
	}
	constructor(){}		
	ngOnInit():void{		
		
	}
}
