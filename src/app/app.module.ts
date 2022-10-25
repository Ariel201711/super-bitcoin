import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { AppHeaderComponent } from './cmps/app-header/app-header.component'
import { AppMainComponent } from './cmps/app-main/app-main.component'
import { AppFooterComponent } from './cmps/app-footer/app-footer.component'
import { ContactComponent } from './pages/contact/contact.component'
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component'
import { StatisticComponent } from './pages/statistic/statistic.component'
import { ContactListComponent } from './cmps/contact-list/contact-list.component'
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component'
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component'
import { ChartComponent } from './cmps/chart/chart.component'
import { HomeComponent } from './pages/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMainComponent,
    AppFooterComponent,
    ContactComponent,
    ContactDetailsComponent,
    StatisticComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactFilterComponent,
    ChartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
