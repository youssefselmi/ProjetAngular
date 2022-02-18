import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Fournisseur } from '../models/Fournisseur';
import { FournisseurService } from '../services/fournisseur.service';
import { Mailf } from '../models/mail';
import { HttpService } from "../services/http.service";
import { FormGroup } from '@angular/forms';



//import '../../src/server.js';

//import {addd} from '../../src/server.js';

//import * as dotenv from "dotenv";
//dotenv.config({ path: __dirname+'/.env' });

/*import * as dotenv from "dotenv";
dotenv.config();*/


@Component({
  selector: 'app-template-form-fournisseur',
  templateUrl: './template-form-fournisseur.component.html',
  styleUrls: ['./template-form-fournisseur.component.css']
})


export class TemplateFormFournisseurComponent implements OnInit {



  fournisseur: Fournisseur;
  listFournisseur: Fournisseur[];


  image : string;

  @Output() mailevent = new EventEmitter<Mailf>();


  @Output() saveEvent = new EventEmitter<Fournisseur>();
  constructor(private serviceFournisseur: FournisseurService,private http: HttpService) { }




  ngOnInit(): void {
    this.fournisseur =  new Fournisseur();

  }

  addFournisseur(f: Fournisseur){
   // this.fournisseur.likeF = 0;
  //alert(this.fournisseur.image_fournisseur.substr(12));
  this.image = "../../assets/"+this.fournisseur.image_fournisseur.substr(12);
 // alert(this.image);


   
this.fournisseur.image_fournisseur=this.image;

    this.serviceFournisseur.postFournisseur(this.fournisseur).subscribe(
() => this.listFournisseur = [this.fournisseur, ...this.listFournisseur]

    );


    

    



  
    //////////////////////////////////Envoyer un mail au fournisseur/////////////////////////
    let user = {
      name: this.fournisseur.code,
      email: this.fournisseur.email_fournisseur,
      sujet: "Bienvnu cher fournisseur a notre magasin",
      html : "Hi "+this.fournisseur.libelle+"  Ton contrat expire dans "+this.fournisseur.date_fin_contrat+"  thank you for joining us"

    }
    this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
     /* err => {
        console.log(err);
        this.loading = false;
        this.buttionText = "Submit";
      },() => {
        this.loading = false;
        this.buttionText = "Submit";
      }*/
    );
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  }














}
  







  
  
  
  



















  
 


