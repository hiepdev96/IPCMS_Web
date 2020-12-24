import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBackTestComponent } from './detail-back-test.component';

describe('DetailBackTestComponent', () => {
  let component: DetailBackTestComponent;
  let fixture: ComponentFixture<DetailBackTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBackTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBackTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
