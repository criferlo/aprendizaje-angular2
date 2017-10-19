import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe:any = {};

  constructor(private activated_:ActivatedRoute,
              private heroesService_:HeroesService) {

    this.activated_.params.subscribe( params =>{
      console.log(params['id']);
      this.heroe = heroesService_.getHeroe(params['id']);
    })
  }

  ngOnInit() {

  }

}
