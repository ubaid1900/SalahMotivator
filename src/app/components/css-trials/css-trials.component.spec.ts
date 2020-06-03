import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssTrialsComponent } from './css-trials.component';

describe('CssTrialsComponent', () => {
  let component: CssTrialsComponent;
  let fixture: ComponentFixture<CssTrialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssTrialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssTrialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
