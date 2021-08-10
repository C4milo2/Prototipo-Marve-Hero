import { Component } from '@angular/core';
// import { HeroeService } from './services/Heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HERO';
  
  constructor(){
    console.log('servicio heroe')
  }
  getheroes( ){
    
  }
  
}
