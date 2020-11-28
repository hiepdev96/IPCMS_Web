import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietHoSoComponent } from './chi-tiet-ho-so.component';

describe('ChiTietHoSoComponent', () => {
  let component: ChiTietHoSoComponent;
  let fixture: ComponentFixture<ChiTietHoSoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietHoSoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietHoSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
