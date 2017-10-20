import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  heroesFind:Heroe[];
  term:string;

  constructor(private heroesService_:HeroesService,
              private activated_:ActivatedRoute) {

    this.activated_.params.subscribe( params =>{
      this.term = params['term'];
      this.heroesFind = heroesService_.searchHeroe(this.term);
    })
  }

  ngOnInit() {
  }

  buscarHeroes(search:string){
    console.log();
  }

}
