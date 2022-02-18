import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormRayonComponent } from './template-form-rayon.component';

describe('TemplateFormRayonComponent', () => {
  let component: TemplateFormRayonComponent;
  let fixture: ComponentFixture<TemplateFormRayonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFormRayonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormRayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
