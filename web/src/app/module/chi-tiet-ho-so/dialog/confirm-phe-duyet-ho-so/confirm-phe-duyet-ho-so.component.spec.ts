import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPheDuyetHoSoComponent } from './confirm-phe-duyet-ho-so.component';

describe('ConfirmPheDuyetHoSoComponent', () => {
  let component: ConfirmPheDuyetHoSoComponent;
  let fixture: ComponentFixture<ConfirmPheDuyetHoSoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmPheDuyetHoSoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmPheDuyetHoSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
