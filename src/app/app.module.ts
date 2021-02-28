import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { HoverDirective } from './hover.directive';
import { UpperPipe } from './upper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavComponent,
    UserComponent,
    RepositoriesComponent,
    HoverDirective,
    UpperPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
