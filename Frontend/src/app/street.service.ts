import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class StreetService {

  constructor(private http: Http) { }
  sum10(num: number){
    return num + 10;
  }

  getStreets(){
    // retorna un observable
    return this.http.get('http://localhost:8080/api/streets');
  }
  getStreet(id:String){
    return this.http.get('http://localhost:8080/api/streets/'+id);
  }
}
