import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachHoSoComponent } from './danh-sach-ho-so.component';

describe('DanhSachHoSoComponent', () => {
  let component: DanhSachHoSoComponent;
  let fixture: ComponentFixture<DanhSachHoSoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachHoSoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachHoSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
