import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from "../localStorage.service";
@Component({
  selector: 'app-right-to-be-forgotten',
  templateUrl: './right-to-be-forgotten.component.html',
  styleUrls: ['./right-to-be-forgotten.component.css']
})
export class RightToBeForgottenComponent implements OnInit {
  public youForgotten:string = 'Oh right! Who were you again?'
  constructor(public service:LocalStorageService) { }
  customerKnownBoolean: boolean;
  @Output() event: EventEmitter<string> = new EventEmitter()
  ngOnInit() {
   this.isCustomerKnown()
  }
  isCustomerKnown(){
    this.customerKnownBoolean = this.service.isCustomerKnown()
  }
  rightToBeForgotten(){
    this.service.rightToBeForgotten()
    this.event.emit(this.youForgotten)
  }
  
}
