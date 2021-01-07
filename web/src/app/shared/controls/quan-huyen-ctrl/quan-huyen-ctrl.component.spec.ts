import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanHuyenCtrlComponent } from './quan-huyen-ctrl.component';

describe('QuanHuyenCtrlComponent', () => {
  let component: QuanHuyenCtrlComponent;
  let fixture: ComponentFixture<QuanHuyenCtrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanHuyenCtrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanHuyenCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
