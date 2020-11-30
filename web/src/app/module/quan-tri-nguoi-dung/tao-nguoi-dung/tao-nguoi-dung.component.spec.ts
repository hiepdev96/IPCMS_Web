import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoNguoiDungComponent } from './tao-nguoi-dung.component';

describe('TaoNguoiDungComponent', () => {
  let component: TaoNguoiDungComponent;
  let fixture: ComponentFixture<TaoNguoiDungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaoNguoiDungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaoNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
