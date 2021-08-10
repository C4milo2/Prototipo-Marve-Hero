import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//routes
import { APP_ROUTING } from './app.routes';
//servicies

//componentes 
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { ComicsComponent } from './component/comics/comics.component';
import { FigurasComponent } from './component/figuras/figuras.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ComicsComponent,
    FigurasComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [

  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
