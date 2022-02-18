import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerayonComponent } from './listerayon.component';

describe('ListerayonComponent', () => {
  let component: ListerayonComponent;
  let fixture: ComponentFixture<ListerayonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerayonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
