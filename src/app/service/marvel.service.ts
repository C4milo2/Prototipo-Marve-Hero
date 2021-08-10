import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  url='e35f6518594f8623&ts=abcdefg&hash=ffb3fcd449d7983e19ebc3ad0b324d85'
  constructor(private http:HttpClient) {
    console.log('hola')
   }

   getMarvel(){
     let header = new HttpHeaders()
     .set('Type-content','aplication/json')

       return this.http.get(this.url,{
         headers: header
        });
   }

}
