import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildExpComponent } from './child-exp/child-exp.component';
import { ChangecolorDirective } from './changecolor.directive';
import { StringreversePipe } from './stringreverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildExpComponent,
    ChangecolorDirective,
    StringreversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
