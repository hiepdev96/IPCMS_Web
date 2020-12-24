import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoNguoiDungTheoKhuVucDiaLyComponent } from './bao-cao-nguoi-dung-theo-khu-vuc-dia-ly.component';

describe('BaoCaoNguoiDungTheoKhuVucDiaLyComponent', () => {
  let component: BaoCaoNguoiDungTheoKhuVucDiaLyComponent;
  let fixture: ComponentFixture<BaoCaoNguoiDungTheoKhuVucDiaLyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoNguoiDungTheoKhuVucDiaLyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoNguoiDungTheoKhuVucDiaLyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
