import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoNguoiDungTheoTrangThaiComponent } from './bao-cao-nguoi-dung-theo-trang-thai.component';

describe('BaoCaoNguoiDungTheoTrangThaiComponent', () => {
  let component: BaoCaoNguoiDungTheoTrangThaiComponent;
  let fixture: ComponentFixture<BaoCaoNguoiDungTheoTrangThaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoNguoiDungTheoTrangThaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoNguoiDungTheoTrangThaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
