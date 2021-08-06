import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'app/shared/shared.module';
import { landingHomeRoutes } from 'app/modules/landing-home/home.routing';
import { LandingHomeComponent } from './landing-home.component';
import { PricingComponent } from './pricing/pricing.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TreoCardModule } from '../../../@treo/components/card';
import { CoreFeaturesComponent } from './core-features/core-features.component';
import { PricingSingleComponent } from './pricing/pricing-single/pricing-single.component';
import { FaqComponent } from './faq/faq.component';
import { PricingMultipleComponent } from './pricing/pricing-multiple/pricing-multiple.component';
import { HeroComponent } from './hero/hero.component';
import { HomeCtaComponent } from './home-cta/home-cta.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@NgModule({
  declarations: [
    LandingHomeComponent,
    PricingComponent,
    PricingSingleComponent,
    CoreFeaturesComponent,
    FaqComponent,
    PricingMultipleComponent,
    HeroComponent,
    HomeCtaComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forChild(landingHomeRoutes),
    MatButtonModule,
    SharedModule,
    MatIconModule,
    MatSlideToggleModule,
    TreoCardModule,
  ]
})
export class LandingHomeModule {
}
