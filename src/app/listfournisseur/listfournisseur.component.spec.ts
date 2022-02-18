import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfournisseurComponent } from './listfournisseur.component';

describe('ListfournisseurComponent', () => {
  let component: ListfournisseurComponent;
  let fixture: ComponentFixture<ListfournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListfournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
