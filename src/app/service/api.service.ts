import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getData(){
    return this.http.get('https://dog.ceo/api/breeds/list/all')
  }

  getDog(dog : string ){
    return this.http.get('https://dog.ceo/api/breed/' + dog +'/images/random')
  }
}
