import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { OfferComponent } from './offer/offer.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';
import { ExpertComponent } from './expert/expert.component';


const routes: Routes = [
  {
    path: 'rejestracja',
    component: RegistrationComponent
  },
  {
    path: 'o-nas',
    component: HomeComponent
  },
  {
    path: 'oferta',
    component: OfferComponent
  },
  {
    path: 'cennik',
    component: PriceComponent
  },
  {
    path: 'specjalisci',
    component: ExpertComponent
  },
  {
    path: 'kontakt',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
