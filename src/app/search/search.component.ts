import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  url="https://gateway.marvel.com:443/v1/public/comics?format=comic&apikey=380352f6404592fbe35f6518594f8623"

  constructor(private http:HttpClient) { 
    console.log()
  }

  ngOnInit(): void {
  }

}
