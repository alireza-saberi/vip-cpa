import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebrandingComponent } from './rebranding.component';

describe('RebrandingComponent', () => {
  let component: RebrandingComponent;
  let fixture: ComponentFixture<RebrandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebrandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
