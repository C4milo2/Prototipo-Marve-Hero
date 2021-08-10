import { Component } from '@angular/core';
import { MarvelService } from './service/marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HERO';
  
  public marvel: Array<any>=[]

  constructor(private marvelservice:MarvelService){

  this.marvelservice.getMarvel().subscribe((resp:any)=>{
    this.marvel =resp
  })

  }
}
