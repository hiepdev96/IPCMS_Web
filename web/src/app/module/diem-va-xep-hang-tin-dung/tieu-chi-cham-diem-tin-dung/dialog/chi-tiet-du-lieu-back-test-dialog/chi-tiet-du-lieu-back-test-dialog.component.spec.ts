import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietDuLieuBackTestDialogComponent } from './chi-tiet-du-lieu-back-test-dialog.component';

describe('ChiTietDuLieuBackTestDialogComponent', () => {
  let component: ChiTietDuLieuBackTestDialogComponent;
  let fixture: ComponentFixture<ChiTietDuLieuBackTestDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietDuLieuBackTestDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietDuLieuBackTestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
