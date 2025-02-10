import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPricingComponent } from './components/card/card-pricing/card-pricing.component';
import { ContentComponent } from './pages/content/content.component';
import { BuyCardComponent } from './pages/content/buy-card/buy-card.component';
import { TitleCardComponent } from './pages/content/title-card/title-card.component';
import { NgxStarsModule } from 'ngx-stars';
import { DescriptionComponent } from './pages/content/description/description.component';
import { TrailerComponent } from './pages/content/trailer/trailer.component';
import { TagComponent } from './pages/content/tag/tag.component';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarComponent,
    CardLabelComponent,
    CardPricingComponent,
    ContentComponent,
		BuyCardComponent,
  	TitleCardComponent,
   	DescriptionComponent,
   	TrailerComponent,
    TagComponent,
	


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		NgxStarsModule,
		SafeUrlPipe

  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class AppModule { }
