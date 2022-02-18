import { Component, OnInit, VERSION } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';

@Component({
  selector: 'app-detail-fournisseur',
  templateUrl: './detail-fournisseur.component.html',
  styleUrls: ['./detail-fournisseur.component.css']
})
export class DetailFournisseurComponent implements OnInit {
  id: number;
  libelle: string;
  date_fin_contrat: string;
  likeFournisseur: number;
  email_fournisseur :string;
  image_fournisseur :string;



  title = 'QRcodes';
  name = 'Angular' + VERSION.major;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.youtube.com/watch?v=qr7f9DjXbHE';




  

  constructor(private service: ActivatedRoute) {}




   

  ngOnInit(): void {
    this.id= this.service.snapshot.params.id;
    this.libelle= this.service.snapshot.params.libelle; 
    this.date_fin_contrat= this.service.snapshot.params.date_fin_contrat; 
    this.likeFournisseur= this.service.snapshot.params.likeFournisseur;
    this.email_fournisseur= this.service.snapshot.params.email_fournisseur;
    this.image_fournisseur= this.service.snapshot.params.image_fournisseur;



    

    

    /*this.title;
this.name;
this.elementType;
this.correctionLevel;
this.value;*/

this.title = 'QRcodes Fournisseur';
this.name = this.name;
this.elementType = NgxQrcodeElementTypes.URL;
this.correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
//this.value = this.email_fournisseur+" Date de fin contrat  "+this.date_fin_contrat + "Nombre de like obtenus"+this.likeFournisseur;
this.value = "Nom de fournisseur -->"+this.libelle+"   Date_fon_dontrat-->"+this.date_fin_contrat+"  Nomre Like Obtenus------------->"+this.likeFournisseur+"  Email -->  "+this.email_fournisseur;






  }

}
