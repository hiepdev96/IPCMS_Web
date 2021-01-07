import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhuongXaCtrlComponent } from './phuong-xa-ctrl.component';

describe('PhuongXaCtrlComponent', () => {
  let component: PhuongXaCtrlComponent;
  let fixture: ComponentFixture<PhuongXaCtrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhuongXaCtrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhuongXaCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
