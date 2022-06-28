import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactAppComponent } from './components/contact-app/contact-app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactAppComponent,
    ContactListComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
