import { Facture } from './../models/Facture';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css'],
})
export class FactureComponent implements OnInit {
  FormFacture: FormGroup;
  listFacture: Facture[];

  constructor() {}

  ngOnInit(): void {
    //  this.FormFacture = new FormGroup({
    //    montantFacture: new FormControl('', [Validators.required]),
    //   montantRemise: new FormControl('', [Validators.required]),
    //  dateFacture: new FormControl('', [Validators.required]),
    //  });
  }
}
