import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-general',
  templateUrl: './hero-general.component.html',
  styleUrls: ['./hero-general.component.less']
})
export class HeroGeneralComponent implements OnInit {
  heroId: any = null;
  
  /* constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((q) => {
      if (q.hasOwnProperty('id'))
        this.heroId = q['id']
    })
  } */

  ngOnInit(): void {

  }

}
