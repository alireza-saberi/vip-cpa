import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingHeaderComponent } from './moving-header.component';

describe('MovingHeaderComponent', () => {
  let component: MovingHeaderComponent;
  let fixture: ComponentFixture<MovingHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovingHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
