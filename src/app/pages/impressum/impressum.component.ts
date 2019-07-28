import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

/* import { Hero }         from '../hero';
import { HeroService }  from '../hero.service'; */

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: [ './impressum.component.scss' ]
})
export class ImpressumComponent implements OnInit {
/*   hero:  Hero */

  constructor(
    private route: ActivatedRoute,
/*     private heroService: HeroService,
 */    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
/*     this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero); */
  }

  goBack(): void {
    this.location.back();
  }
}
