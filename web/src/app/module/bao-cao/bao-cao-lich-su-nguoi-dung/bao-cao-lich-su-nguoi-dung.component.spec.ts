import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoLichSuNguoiDungComponent } from './bao-cao-lich-su-nguoi-dung.component';

describe('BaoCaoLichSuNguoiDungComponent', () => {
  let component: BaoCaoLichSuNguoiDungComponent;
  let fixture: ComponentFixture<BaoCaoLichSuNguoiDungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoLichSuNguoiDungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoLichSuNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
