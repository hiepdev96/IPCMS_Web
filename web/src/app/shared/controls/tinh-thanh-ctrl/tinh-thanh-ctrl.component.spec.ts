import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinhThanhCtrlComponent } from './tinh-thanh-ctrl.component';

describe('TinhThanhCtrlComponent', () => {
  let component: TinhThanhCtrlComponent;
  let fixture: ComponentFixture<TinhThanhCtrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinhThanhCtrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinhThanhCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
