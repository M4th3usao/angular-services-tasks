import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  Name: string = 'Matheus Henrique Cruz de Oliveira';
  RA: string = '0050832021009';
}
