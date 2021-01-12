import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmThamDinhHoSoComponent } from './confirm-tham-dinh-ho-so.component';

describe('ConfirmThamDinhHoSoComponent', () => {
  let component: ConfirmThamDinhHoSoComponent;
  let fixture: ComponentFixture<ConfirmThamDinhHoSoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmThamDinhHoSoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmThamDinhHoSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
