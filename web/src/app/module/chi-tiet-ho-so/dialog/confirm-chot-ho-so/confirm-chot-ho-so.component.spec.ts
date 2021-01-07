import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmChotHoSoComponent } from './confirm-chot-ho-so.component';

describe('ConfirmChotHoSoComponent', () => {
  let component: ConfirmChotHoSoComponent;
  let fixture: ComponentFixture<ConfirmChotHoSoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmChotHoSoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmChotHoSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
