import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-storage',
	templateUrl: './storage.component.html',
	styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {
	userStorage = window.localStorage;
	

	constructor() { }

	ngOnInit() {
	}

}
