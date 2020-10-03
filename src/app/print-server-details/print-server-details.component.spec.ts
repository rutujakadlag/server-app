import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintServerDetailsComponent } from './print-server-details.component';

describe('PrintServerDetailsComponent', () => {
  let component: PrintServerDetailsComponent;
  let fixture: ComponentFixture<PrintServerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintServerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintServerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
