import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcruamComponent } from './breadcruam.component';

describe('BreadcruamComponent', () => {
  let component: BreadcruamComponent;
  let fixture: ComponentFixture<BreadcruamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcruamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcruamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
