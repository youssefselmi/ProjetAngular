import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { FactureComponent } from './facture/facture.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { DetailFournisseurComponent } from './detail-fournisseur/detail-fournisseur.component';
import { TemplateFormFournisseurComponent } from './template-form-fournisseur/template-form-fournisseur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListfournisseurComponent } from './listfournisseur/listfournisseur.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { QRCodeModule } from 'angularx-qrcode';
import { ListerayonComponent } from './listerayon/listerayon.component';
import { TemplateFormRayonComponent } from './template-form-rayon/template-form-rayon.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { SliderfournisseurComponent } from './sliderfournisseur/sliderfournisseur.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';









@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotfoundpageComponent,
    FactureComponent,
    FournisseurComponent,
    DetailFournisseurComponent,
    TemplateFormFournisseurComponent,
    ListfournisseurComponent,
    ListerayonComponent,
    TemplateFormRayonComponent,
    SliderfournisseurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxQRCodeModule,
    ReactiveFormsModule,
    QRCodeModule,
    NgImageSliderModule,
    NgbModule,
    
 ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
