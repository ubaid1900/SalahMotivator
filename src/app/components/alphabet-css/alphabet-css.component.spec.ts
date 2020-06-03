import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetCssComponent } from './alphabet-css.component';

describe('AlphabetCssComponent', () => {
  let component: AlphabetCssComponent;
  let fixture: ComponentFixture<AlphabetCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphabetCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
