import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-bottom',
  templateUrl: './hero-bottom.component.html',  
})
export class HeroBottomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mostrarCriar = true;
  mostrarForm = false;
  mostrarEnviar = false;

  mostrarCriarTopico() {
    this.mostrarCriar = true;
    this.mostrarForm = false;
    this.mostrarEnviar = false;
  }

  mostrarFormTopico() {
    this.mostrarCriar = false;
    this.mostrarForm = true;
    this.mostrarEnviar = false;
  }

  mostrarEnviarTopico() {
    this.mostrarCriar = false;
    this.mostrarForm = false;
    this.mostrarEnviar = true;
  }

}
