import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleTrendsDateComponent } from './google-trends-date.component';

describe('GoogleTrendsDateComponent', () => {
  let component: GoogleTrendsDateComponent;
  let fixture: ComponentFixture<GoogleTrendsDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleTrendsDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleTrendsDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
