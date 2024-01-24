import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { FinishedListComponent } from './components/finished-list/finished-list.component';
import { ArchivedListComponent } from './components/archived-list/archived-list.component';
import { OngoingListComponent } from './components/ongoing-list/ongoing-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddItemComponent,
    FinishedListComponent,
    ArchivedListComponent,
    OngoingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
