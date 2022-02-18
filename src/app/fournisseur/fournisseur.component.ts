import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fournisseur } from '../models/Fournisseur';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  @Input() fournisseur: Fournisseur;
  @Output() notification = new EventEmitter<Fournisseur>();
  @Output() notificationdelete = new EventEmitter<Fournisseur>();
  @Input() idddInput: number;




  constructor() { }

  ngOnInit(): void {

  

  }
  sendNotif(){
    this.notification.emit(this.fournisseur);
  }




}
