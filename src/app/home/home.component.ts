import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../models/Fournisseur';
import { FournisseurService } from '../services/fournisseur.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listFournisseur: Fournisseur[];

  iddd : number;
  

  constructor(private serviceFournisseur: FournisseurService) { }

  ngOnInit(): void {

    this.serviceFournisseur.getAllFournisseurs().subscribe(
      (data: Fournisseur[]) => this.listFournisseur = data
    );  }

  


  pushFournisseur(f){
    this.listFournisseur.push(f);
  }




delete(i:number){   
this.listFournisseur.splice(i,1);

  }



  incremtLike(fournisseur: Fournisseur){
    let i = this.listFournisseur.indexOf(fournisseur);
    this.listFournisseur[i].likeFournisseur++;
  }





imgCollection: Array<object> = [];
verifslider=-1;
showimages(images:any,i:any){
if(this.verifslider==i){

  for(let img of images){

    let obj = {'i':i,'image':img.url,'thumbImage':img.url,'alt':img.name,'title':img.name};
    this.imgCollection.splice(this.imgCollection.indexOf(obj),1);
  }
  this.verifslider=-1;
}

else{
  this.imgCollection=[];
  this.verifslider=i;
  console.log(images);
  for(let img of images){
    console.log(i.url);
    this.imgCollection.push({'i':i,'image':img.url,'thumbImage':img.url,'alt':img.name,'title':img.name});
  }
}


}













}
