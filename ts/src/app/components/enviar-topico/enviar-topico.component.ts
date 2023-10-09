import { Component, OnInit } from '@angular/core';
import { HeroBottomComponent } from '../hero-bottom/hero-bottom.component';

@Component({
  selector: 'app-enviar-topico',
  templateUrl: './enviar-topico.component.html',
})
export class EnviarTopicoComponent implements OnInit {

  constructor(public heroBottom: HeroBottomComponent) { }

  ngOnInit(): void {
  }

  chamarCriarTopico() {
    this.heroBottom.mostrarFormTopico()
  }

}
