/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TheUsualComponent } from './the-usual.component';

describe('TheUsualComponent', () => {
  let component: TheUsualComponent;
  let fixture: ComponentFixture<TheUsualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheUsualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheUsualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
