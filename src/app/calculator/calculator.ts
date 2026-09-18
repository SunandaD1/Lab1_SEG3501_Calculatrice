import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.html',
  styleUrls: ['./calculator.css'],
  imports: [DecimalPipe]
})
export class Calculator {

  result = 0;

  add(a: string, b: string): void {
    this.result = Number(a) + Number(b);
  }

  sub(a: string, b: string): void {
    this.result = Number(a) - Number(b);
  }

  mul(a: string, b: string): void {
    this.result = Number(a) * Number(b);
  }

  div(a: string, b: string): void {
    this.result = Number(a) / Number(b);
  }
}
