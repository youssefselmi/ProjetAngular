import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { ListfournisseurComponent } from '../listfournisseur/listfournisseur.component';
import { Fournisseur } from '../models/Fournisseur';
import { FournisseurService } from '../services/fournisseur.service';
import { HttpService } from '../services/http.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-sliderfournisseur',
  templateUrl: './sliderfournisseur.component.html',
  styleUrls: ['./sliderfournisseur.component.css'],
  providers: [NgbCarouselConfig]
})
export class SliderfournisseurComponent implements OnInit {


  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);


  data = [
    { img: "../../assets/fournisseur.jpg", title: "Slide 1" },
    { img: "../../assets/f.png", title: "Slide 2" },
    { img: "../../assets/fournisseur.jpg", title: "Slide 3" },
    { img: "../../assets/produit.jpeg", title: "Slide 3" }

  ];

  listFournisseur: Fournisseur[];
  constructor(private serviceFournisseur: FournisseurService,private http: HttpService,config: NgbCarouselConfig) {

    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
   }

  ngOnInit(): void {


    this.serviceFournisseur.getAllFournisseurs().subscribe(
      (data: Fournisseur[]) => {
         this.listFournisseur = data;
      })
      


      
     
      

      for (let index = 0; index < this.listFournisseur.length; index++) {

     // this.imgCollectione.image = ;
/*
      this.imgCollectione=this.imgCollectione {
    //  image +="ssss";

      
      
      }
    }*/
  }


}








}




