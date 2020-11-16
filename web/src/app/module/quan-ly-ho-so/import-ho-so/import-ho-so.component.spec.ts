import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportHoSoComponent } from './import-ho-so.component';

describe('ImportHoSoComponent', () => {
  let component: ImportHoSoComponent;
  let fixture: ComponentFixture<ImportHoSoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportHoSoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportHoSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
