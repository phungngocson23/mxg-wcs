import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './admin/homepage/homepage.component';
import { SidecontrolComponent } from './admin/sidecontrol/sidecontrol.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { ProductComponent } from './user/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SidecontrolComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieAnimationViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
