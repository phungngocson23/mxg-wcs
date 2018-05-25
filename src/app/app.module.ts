import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './admin/homepage/homepage.component';
import { SidecontrolComponent } from './admin/sidecontrol/sidecontrol.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SidecontrolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
