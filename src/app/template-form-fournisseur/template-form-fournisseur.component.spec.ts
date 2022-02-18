import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormFournisseurComponent } from './template-form-fournisseur.component';



describe('TemplateFormFournisseurComponent', () => {
  let component: TemplateFormFournisseurComponent;
  let fixture: ComponentFixture<TemplateFormFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFormFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
