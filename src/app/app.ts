import { Component } from '@angular/core';
import { Calculator } from './calculator/calculator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Calculator],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
