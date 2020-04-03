import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from "../localStorage.service";
@Component({
  selector: 'app-right-to-be-forgotten',
  templateUrl: './right-to-be-forgotten.component.html',
  styleUrls: ['./right-to-be-forgotten.component.css']
})
export class RightToBeForgottenComponent implements OnInit {
  public buttonText = 'I want to be forgotten!'
  public messageEmit:string = 'Oh right! Who were you again?'
  constructor(public service:LocalStorageService) { }
  customerKnownBoolean: boolean;
  @Output() event: EventEmitter<string> = new EventEmitter()
  ngOnInit() {
   this.isCustomerKnown()
  }
  isCustomerKnown(){
    this.customerKnownBoolean = this.service.isCustomerKnown()
  }
  sendToParent(){
    this.event.emit(this.messageEmit)
    this.service.rightToBeForgotten()
    this.buttonText = 'Jesus, who are you!?'
  }
  
}
