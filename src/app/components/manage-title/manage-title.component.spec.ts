import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTitleComponent } from './manage-title.component';

describe('ManageTitleComponent', () => {
  let component: ManageTitleComponent;
  let fixture: ComponentFixture<ManageTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
