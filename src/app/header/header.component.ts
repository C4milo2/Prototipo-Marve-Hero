import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
 
})

export class HeaderComponent implements OnInit {

 
  
  url=''
  constructor(private http:HttpClient){
   
  }


  ngOnInit(): void {
  }
 
}
