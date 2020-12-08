import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapNhatPhamViNguoiDungComponent } from './cap-nhat-pham-vi-nguoi-dung.component';

describe('CapNhatPhamViNguoiDungComponent', () => {
  let component: CapNhatPhamViNguoiDungComponent;
  let fixture: ComponentFixture<CapNhatPhamViNguoiDungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapNhatPhamViNguoiDungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapNhatPhamViNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
