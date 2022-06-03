import { Component, OnInit } from '@angular/core';
import { BMIDetails } from './bmi-calculator.component.model';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.less']
})
export class BmiCalculatorComponent implements OnInit {

  public bmiDetails: BMIDetails = <BMIDetails>{ gender: 'male' };
  public weightUnit: 'pounds' | 'kilograms' = 'kilograms';
  public bmi: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  calculate() {
    let weight = this.bmiDetails.weight;
    if(this.weightUnit == 'pounds') {
      weight = this.bmiDetails.weight * .4535;
    }
    this.bmi = (weight / this.bmiDetails.height / this.bmiDetails.height) * 10000;
    this.bmi = Math.round(this.bmi * 100) / 100; //to round upto 2 decimals
  }

  onHeightCmChange() {
    const inches = Math.round(this.bmiDetails.height / 2.54);
    this.bmiDetails.heightIn = inches % 12;
    this.bmiDetails.heightFt = Math.floor(inches / 12);
  }

  onHeightInchChange() {
    this.bmiDetails.height = Math.floor(((this.bmiDetails.heightFt * 12) + this.bmiDetails.heightIn) * 2.54);
  }

  onHeightFeetChange() {
    this.bmiDetails.height = Math.floor(((this.bmiDetails.heightFt * 12) + this.bmiDetails.heightIn) * 2.54);
  }

  onWeightUnitChange(unit: 'pounds' | 'kilograms') {
    this.weightUnit = unit;
  }
}
