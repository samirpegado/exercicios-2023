import { Component, OnInit } from '@angular/core';
import { HeroBottomComponent } from '../hero-bottom/hero-bottom.component';

@Component({
  selector: 'app-criar-topico',
  templateUrl: './criar-topico.component.html',

})
export class CriarTopicoComponent implements OnInit {

  constructor( public heroBottom: HeroBottomComponent ) { }

  chamarMostrarForm() {
    this.heroBottom.mostrarFormTopico()
  }

  ngOnInit(): void {
  }

 

}
