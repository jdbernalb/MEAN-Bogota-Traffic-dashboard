import { Component, OnInit , Input } from '@angular/core';
import { StreetService } from "app/street.service";
import { MdCheckboxModule } from '@angular/material';
@Component({
  selector: 'app-my-first-cmpnt',
  templateUrl: './my-first-cmpnt.component.html',
  styleUrls: ['./my-first-cmpnt.component.scss']
})
export class MyFirstCmpntComponent implements OnInit {

@Input()
  num1: number
@Input()
  num2: number

  sum: number
  mult: number
  allstreets: any[]
  arrayshape: any[]=[];
  arrayjam: any[]=[];
  arrayholes: any[]=[];
  zoom:number = 12;
  lat: number = 4.674880;
  lng: number = -74.098822;
  
  constructor(private streets: StreetService) { }
  getStreetInfo(id:string, callback){
      this.streets.getStreet(id).subscribe(resp=>{
        callback(resp.json());
    })
  }

  getJamColor(jam) {
    if(jam > 80) {
      return 'red'
    } else if(jam > 60) {
      return '#ff6300'
    } else if(jam > 40) {
      return '#ffaa00'
    } else if(jam > 20) {
      return '#fffc00'
    } else {
      return '#3cde4c'
    }
  }

  ngOnInit() {
    this.sum = this.num1 + this.num2
    this.mult = this.num1 * this.num2
    let x = this.streets.getStreets(); 
    x.subscribe(res=>{
      let myJson = res.json();
      this.allstreets = myJson;
      myJson.forEach(street=>{
           this.getStreetInfo(street.id,resstreet=>{ 
            this.arrayshape.push(resstreet.shape);
            this.arrayjam.push(resstreet.jam_level);
            this.arrayholes.push(resstreet.holes);
           })
      });   
    })
  }
}
