import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputHoSoComponent } from './form-input-ho-so.component';

describe('FormInputHoSoComponent', () => {
  let component: FormInputHoSoComponent;
  let fixture: ComponentFixture<FormInputHoSoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputHoSoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputHoSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
