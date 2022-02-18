import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Rayon } from '../models/Rayon';
import { HttpService } from '../services/http.service';
import { RayonService } from '../services/rayon.service';

@Component({
  selector: 'app-template-form-rayon',
  templateUrl: './template-form-rayon.component.html',
  styleUrls: ['./template-form-rayon.component.css']
})
export class TemplateFormRayonComponent implements OnInit {

  rayon: Rayon;
  listRayon: Rayon[];



  @Output() saveEvent = new EventEmitter<Rayon>();

  constructor(private servicerayon: RayonService,private http: HttpService) { }

  ngOnInit(): void {
    this.rayon =  new Rayon();


  }





  addRayon(f: Rayon){
    
    this.servicerayon.postRayon(this.rayon).subscribe(
 () => this.listRayon = [this.rayon, ...this.listRayon]
 
     ); }









}
