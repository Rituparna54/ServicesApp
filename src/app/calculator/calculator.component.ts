import { Component } from '@angular/core';
import{ CalculatorserviceService } from '../calculatorservice.service'
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
constructor( private service: CalculatorserviceService){}
Add : number=0;
Sub : number=0;
Multi : number=0;
Div : number=0;
ngOnInit(){
  let a = 4 ;
  let b =2;
  this.Add = this.service.Add(a,b);
  this.Sub = this.service.Sub(a,b);
  this.Multi = this.service.Multi(a,b);
  this.Div = this.service.Div(a,b);
}

}
