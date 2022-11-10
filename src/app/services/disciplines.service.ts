import { Injectable } from '@angular/core';

class Discipline {
  title: string;
}

@Injectable()
export class DisciplineService {
  public disciplines: [
    {
      name: 'Desenvolvimento para Dispositivos Móveis';
      diaDaSemana: 'Segunda';
      time: '19h00';
    },
    {
      name: 'Inglês';
      diaDaSemana: 'Terça';
      time: '19h00';
    },
    {
      name: 'Negócios e Marketing e Eletrônicos';
      diaDaSemana: ' Terça e Quarta';
      time: 'Terça - 20h50 \n Quarta - 19h00';
    },
    {
      name: 'Desenvolvimento para Servidores';
      diaDaSemana: 'Quinta';
      time: '19h00';
    },
    {
      name: 'Tópicos Especiais em Sistemas para Internet';
      diaDaSemana: 'Sexta';
      time: '19h00';
    },
    {
      name: 'Projeto de Prototipagem e Testes de Usabilidade';
      diaDaSemana: 'Sábado';
      time: '8h00';
    }
  ];

  constructor() {}

  getDisciplines() {
    return this.disciplines;
  }
}
