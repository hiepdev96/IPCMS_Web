import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTaoHoSoComponent } from './form-tao-ho-so.component';

describe('FormTaoHoSoComponent', () => {
  let component: FormTaoHoSoComponent;
  let fixture: ComponentFixture<FormTaoHoSoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTaoHoSoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTaoHoSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
