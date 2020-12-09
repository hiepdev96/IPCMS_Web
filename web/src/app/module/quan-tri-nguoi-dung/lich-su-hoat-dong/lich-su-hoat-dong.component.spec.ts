import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuHoatDongComponent } from './lich-su-hoat-dong.component';

describe('LichSuHoatDongComponent', () => {
  let component: LichSuHoatDongComponent;
  let fixture: ComponentFixture<LichSuHoatDongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuHoatDongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuHoatDongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
