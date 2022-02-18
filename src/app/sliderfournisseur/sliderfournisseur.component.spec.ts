import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderfournisseurComponent } from './sliderfournisseur.component';

describe('SliderfournisseurComponent', () => {
  let component: SliderfournisseurComponent;
  let fixture: ComponentFixture<SliderfournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderfournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderfournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
