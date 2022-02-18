import { FactureComponent } from './facture/facture.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { DetailFournisseurComponent } from './detail-fournisseur/detail-fournisseur.component';
import { ListfournisseurComponent } from './listfournisseur/listfournisseur.component';
import { ListerayonComponent } from './listerayon/listerayon.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'facture', component: FactureComponent },
  { path: 'fournisseur', component: FournisseurComponent },
  { path: 'adminfournisseur', component: ListfournisseurComponent },
  { path: 'adminrayon', component: ListerayonComponent },
  {path: 'home/fournisseur/:id/:libelle/:date_fin_contrat/:likeFournisseur/:email_fournisseur/:image_fournisseur', component: DetailFournisseurComponent},
  { path: '**', component: NotfoundpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
