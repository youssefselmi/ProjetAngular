import { Injectable } from '@angular/core';
import { Fournisseur } from '../models/Fournisseur';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  listFournisseurShare: Fournisseur[];
  url = 'http://localhost:3000/fournisseur/';

  baseurl=environment.url+"fournisseur/";
  Fournisseurs :Fournisseur[]=[];


  constructor(private http: HttpClient) { }


  /*getFournisseurs() {

    this.listFournisseurShare = [
      
      {idFournisseur: 2, code: 'az5aze', libelle: 'Maestro', image_fournisseur: 'produit.jpeg', date_fin_contrat: '02/02/2021'},
      {idFournisseur: 11, code: 'az5aze', libelle: 'Maestro', image_fournisseur: 'produit.jpeg', date_fin_contrat: '02/02/2021'},
      ];
      return this.listFournisseurShare;

  }*/


  getFournisseursWS(){
    return this.http.get<Fournisseur[]>("http://localhost:3000/fournisseur");

   }

   
  getFournisseursWSS():Observable<Fournisseur[]>{

    return this.http.get<Fournisseur[]>("http://localhost:8089/SpringMVC/fournisseur/retrieveFournisseurs");

   }



   getAllFournisseurs() :Observable<Fournisseur[]>{
     return this.http.get<Fournisseur[]>(this.baseurl+"retrieveFournisseurs");

   }


   deleteFournisseur(id)
   {
    return this.http.delete(this.baseurl+"remove-fournisseur/"+id);

   }


   postFournisseur(fournisseur: Fournisseur) {
    return this.http.post(this.baseurl+"add-fournisseur", fournisseur);
  }


  sendEmail(url, data) {
    return this.http.post(url, data);
  }
 


   
}
