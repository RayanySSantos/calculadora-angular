import { Component } from '@angular/core';
import { CalculadoraComponent } from './calculadora/calculadora.component';

const COMPONENTS = [CalculadoraComponent];

@Component({
  selector: 'app-root',
  imports: [...COMPONENTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
