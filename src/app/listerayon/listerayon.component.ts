import { Component, OnInit } from '@angular/core';
import { Rayon } from '../models/Rayon';
import { HttpService } from '../services/http.service';
import { RayonService } from '../services/rayon.service';

@Component({
  selector: 'app-listerayon',
  templateUrl: './listerayon.component.html',
  styleUrls: ['./listerayon.component.css']
})
export class ListerayonComponent implements OnInit {
  listRayon: Rayon[];
  idd: number; 
  p:number = 1;



  constructor(private serviceRayon: RayonService,private http: HttpService) { }

  ngOnInit(): void {


    this.serviceRayon.getAllRayons().subscribe(
      (data: Rayon[]) => {
         this.listRayon = data;
      })}



      key: string = 'qte_maximale';
      reverse: boolean = false;
        sort(key){
          this.key = key;
          this.reverse = !this.reverse;}
      



          delete(id){

            
                this.serviceRayon.deleteRayon(id).subscribe(
                  ()=>this.listRayon = this.listRayon.filter(Rayon =>Rayon.idRayon != id)
                );
                alert("Rayon supprimé");

            }




}


