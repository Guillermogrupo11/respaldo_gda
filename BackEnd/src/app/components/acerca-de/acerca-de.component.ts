import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {
  persona!: any;

  constructor(public personaService: PersonaService) {}

  mostrarDatos() {
      this.personaService.getPersona().subscribe((data) => {
        this.persona = data;
      })
  }

  ngOnInit(): void {
    this.mostrarDatos();
  }
}