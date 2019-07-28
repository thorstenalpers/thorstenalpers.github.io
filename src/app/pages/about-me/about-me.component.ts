import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Typed from 'typed.js';
import { particlesConfig } from './particles.json';
import { typedConfig } from './typed.json';

declare var particlesJS: any;

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    particlesJS('particles-js', particlesConfig);

    const typed = new Typed('.typed-text', typedConfig);
  }
}
