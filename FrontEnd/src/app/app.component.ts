import { Component, OnInit } from '@angular/core';
import { persona } from './model/persona.model';
import { PersonaService } from './service/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proyectoIntegrador';

  personas!: persona

  getPersonas(){
    return this.personas
  }


  constructor(private personaService: PersonaService){}
  
  ngOnInit(): void {
    this.personaService.getPersona().subscribe((data) => {
      this.personas = data
      console.log(typeof this.personas);
      
    })

    
  }
}
