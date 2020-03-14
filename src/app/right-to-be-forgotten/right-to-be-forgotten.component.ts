import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "../localStorage.service";
@Component({
  selector: 'app-right-to-be-forgotten',
  templateUrl: './right-to-be-forgotten.component.html',
  styleUrls: ['./right-to-be-forgotten.component.css']
})
export class RightToBeForgottenComponent implements OnInit {

  constructor(public service:LocalStorageService) { }

  ngOnInit() {
  }
  rightToBeForgotten(){
    
  }
}
