import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoPhanBoTheoThoiGianComponent } from './bao-cao-phan-bo-theo-thoi-gian.component';

describe('BaoCaoPhanBoTheoThoiGianComponent', () => {
  let component: BaoCaoPhanBoTheoThoiGianComponent;
  let fixture: ComponentFixture<BaoCaoPhanBoTheoThoiGianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaoCaoPhanBoTheoThoiGianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoPhanBoTheoThoiGianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
