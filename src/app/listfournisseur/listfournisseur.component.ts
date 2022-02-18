import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Fournisseur } from '../models/Fournisseur';
import { FournisseurService } from '../services/fournisseur.service';
import { HttpService } from '../services/http.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';



@Component({
  selector: 'app-listfournisseur',
  templateUrl: './listfournisseur.component.html',
  styleUrls: ['./listfournisseur.component.css']
})
export class ListfournisseurComponent implements OnInit {

  @ViewChild('htmlData') htmlData:ElementRef;

  listFournisseur: Fournisseur[];
  //Date CurrentDate = new Date();
  CurrentDate = Date.now();

  indice=0;

  idd: number; 
  p:number = 1;

  datelyoum : bigint;
  datelcontrat : bigint;

  convert : number;

  

  

  constructor(private serviceFournisseur: FournisseurService,private http: HttpService) { }

  ngOnInit(): void {

    this.idd;

    this.serviceFournisseur.getAllFournisseurs().subscribe(
      (data: Fournisseur[]) => {
         this.listFournisseur = data;
      })


  }

  

key: string = 'idFournisseur';
reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;

  }


  delete(id,dateF,mail,lib){

   

if(new Date(dateF) < new Date(this.CurrentDate)){

  //alert("fff"+new Date(this.CurrentDate));

    this.serviceFournisseur.deleteFournisseur(id).subscribe(
      ()=>this.listFournisseur = this.listFournisseur.filter(Fournisseur =>Fournisseur.idFournisseur != id)
    );
    alert("contrat fini Fournisseur supprimé ✅✅✅");


    
    
 //////////////////////////////////Envoyer un mail au fournisseur/////////////////////////
 let user = {
  name: lib,
  email: mail,
  sujet: "Contrat Expirée",
  html : "Hi "+lib+"  Ton contrat a expire dans   thank you for joining us"

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
  } else {    alert("contrat n'est pas fini!! Vous ne pouvez pas supprimer ce fournisseur ⛔⛔⛔⛔");

 // this.datelcontrat=new Date(dateF);

   // this.datelyoum=this.CurrentDate;

   // alert(new Date(dateF).getTime()-this.CurrentDate);
    

  }

  //var timeStamp = dateF.getTime();
  //console.log(new Date(dateF));
  //console.log(new Date(this.CurrentDate));

 
    
    }










  /*  delete(id,dateF){

      if(new Date(dateF) < new Date(this.CurrentDate)){
        //this.indice=1;
      
          this.serviceFournisseur.deleteFournisseur(id).subscribe(
            ()=>this.listFournisseur = this.listFournisseur.filter(Fournisseur =>Fournisseur.idFournisseur != id)
          );
      
          }
      
        //var timeStamp = dateF.getTime();
        console.log(new Date(dateF));
        console.log(new Date(this.CurrentDate));
      
       //alert(this.CurrentDate+"  "+dateF);
          
          }
      */








          public openPDF():void {
            let DATA = document.getElementById('htmlData');
                
            html2canvas(DATA).then(canvas => {
                
                let fileWidth = 208;
                let fileHeight = canvas.height * fileWidth / canvas.width;
                
                const FILEURI = canvas.toDataURL('C:/Users/ASUS/Documents/Angular workspace/GestionMagasin-Angular-main/src/png')
                let PDF = new jsPDF('p', 'mm', 'a4');
                let position = 0;
                PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
                
                PDF.save('angular-demo.pdf');
            });     
            }



            exportExcel() {
 
              let workbook = new Workbook();
              let worksheet = workbook.addWorksheet('ProductSheet');
             
              worksheet.columns = [
                { header: 'Id', key: 'id', width: 10 },
                { header: 'Code', key: 'name', width: 10 },
                { header: 'Libelle', key: 'brand', width: 10 },
                { header: 'image', key: 'color', width: 32 },
                { header: 'Date_fin_contrat', key: 'price', width: 32/*, style: { font: { name: 'Arial Black', size:10, color:red} } */},
              ];
             
              this.listFournisseur.forEach(e => {
                worksheet.addRow({id: e.idFournisseur, name: e.code, brand:e.libelle, color:e.image_fournisseur, price:e.date_fin_contrat },"n");
              });
             
              workbook.xlsx.writeBuffer().then((data) => {
                let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                fs.saveAs(blob, 'ProductData.xlsx');
              })
             
            }



            MAJ()
            {

              for (let index = 0; index < this.listFournisseur.length; index++) {

                
 // if( -new Date(this.listFournisseur[index].date_fin_contrat).getTime()+this.CurrentDate >= 599362854){


 (Math.trunc(this.convert=(+new Date(this.listFournisseur[index].date_fin_contrat).getTime()-this.CurrentDate)/3600/360/60));

    let user = {
      name: this.listFournisseur[index].code,
      email: this.listFournisseur[index].email_fournisseur,
      sujet: "Expiration contrat Bientot",
      html : "Hi "+this.listFournisseur[index].libelle+" Ton Contrat avec notre magasin espirera Dans "+Math.trunc(this.convert)+" jours"

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
   // } 
  } 
  } 












  
imgCollection: Array<object> = [];
verifslider=-1;
showimages(images:any,i:any){
if(this.verifslider==i){

  for(let img of images){

    let obj = {'i':i,'image':img.image_fournisseur,'thumbImage':img.image_fournisseur,'alt':img.libelle,'title':img.libelle};
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
    this.imgCollection.push({'i':i,'image':img.image_fournisseur,'thumbImage':img.image_fournisseur,'alt':img.libelle,'title':img.libelle});
  }
}
}







    



}
