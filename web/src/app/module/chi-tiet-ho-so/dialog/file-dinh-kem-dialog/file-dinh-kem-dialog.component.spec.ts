import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDinhKemDialogComponent } from './file-dinh-kem-dialog.component';

describe('FileDinhKemDialogComponent', () => {
  let component: FileDinhKemDialogComponent;
  let fixture: ComponentFixture<FileDinhKemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileDinhKemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileDinhKemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
