import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Rayon } from '../models/Rayon';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RayonService {

  listFournisseurShare: Rayon[];
  url = 'http://localhost:3000/rayon/';

  baseurl=environment.url+"rayon/";
  Fournisseurs :Rayon[]=[];

  constructor(private http: HttpClient) { }


  getAllRayons() :Observable<Rayon[]>{
    return this.http.get<Rayon[]>(this.baseurl+"retrieveRayons");

  }


  postRayon(rayon: Rayon) {
    return this.http.post(this.baseurl+"add-rayon", rayon);
  }


  
  
  deleteRayon(id)
   {
    return this.http.delete(this.baseurl+"remove-rayon/"+id);
   }
  






}
