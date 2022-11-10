import { Component, OnInit } from '@angular/core';
import { DisciplineService } from '../../services/disciplines.service';

@Component({
  selector: 'app-discipline',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.css'],
})
export class DisciplineComponent implements OnInit {
  constructor() {}
  // constructor(public disciplines: DisciplineService) {
  //   this.getDisciplines();
  // }

  ngOnInit() {}
  // ngOnInit(): void {}

  // getDiciplines(): void{
  //   this.DisciplineService.getAll().subscribe((this.disciplines) => (this.disciplines = this.disciplines));
  // }
}
