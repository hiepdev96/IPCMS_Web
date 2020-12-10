import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoSoLuongHoSoComponent } from './bao-cao-so-luong-ho-so.component';

describe('BaoCaoSoLuongHoSoComponent', () => {
  let component: BaoCaoSoLuongHoSoComponent;
  let fixture: ComponentFixture<BaoCaoSoLuongHoSoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoSoLuongHoSoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoSoLuongHoSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
