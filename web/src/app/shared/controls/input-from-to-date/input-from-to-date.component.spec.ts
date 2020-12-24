import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFromToDateComponent } from './input-from-to-date.component';

describe('InputFromToDateComponent', () => {
  let component: InputFromToDateComponent;
  let fixture: ComponentFixture<InputFromToDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFromToDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFromToDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
