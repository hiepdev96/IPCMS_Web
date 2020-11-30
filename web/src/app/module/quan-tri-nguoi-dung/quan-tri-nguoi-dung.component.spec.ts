import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanTriNguoiDungComponent } from './quan-tri-nguoi-dung.component';

describe('QuanTriNguoiDungComponent', () => {
  let component: QuanTriNguoiDungComponent;
  let fixture: ComponentFixture<QuanTriNguoiDungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanTriNguoiDungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanTriNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
