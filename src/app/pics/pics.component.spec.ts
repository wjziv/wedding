/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PicsComponent } from './pics.component';

describe('PicsComponent', () => {
  let component: PicsComponent;
  let fixture: ComponentFixture<PicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
