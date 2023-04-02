import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorserviceService {

  constructor() { }
  
    Add(a:any , b:any){
      return a+b ;
    }
    Sub(a:any , b:any){
      return a-b ;
    }
    Multi(a:any , b:any){
      return a*b ;
    }
    Div(a:any , b:any){
      return a/b ;
    }
}
