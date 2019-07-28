import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Skill } from 'src/app/core/models/skill';
import * as ProgressBar from 'progressbar.js';

@Component({
  selector: 'app-skill-entry',
  templateUrl: './skill-entry.component.html',
  styleUrls: ['./skill-entry.component.scss'],
})

export class SkillEntryComponent implements OnInit, AfterViewInit {
  @ViewChild('skillEntryId', { static: false }) progressbarDivElem?: ElementRef<HTMLElement>;

  @Input() skill: Skill;
  currentValue: string;

  constructor() { }

  ngAfterViewInit() {
    const percentage = this.skill.valueInPercentage;
    const durationValue = percentage * 80;

    const that = this;

    const bar = new ProgressBar.Line(this.progressbarDivElem.nativeElement, {
      color: '#05A',
      svgStyle: {
        display: 'block',
        width: '100%'
      },
      text: {
        value: null,
        className: 'progressbar__label',
        autoStyleContainer: true,
        alignToBottom: true
      },
      fill: null,
      duration: durationValue,
      easing: 'easeOut',
      from: {
        color: '#eee'
      },
      to: {
        color: '#000'
      },
      step() { },
      warnings: false
    });

    bar.animate(percentage / 100.0, {
      step() {
        that.currentValue = (bar.value() * 100).toFixed(0) + '%';
      }
    });
  }

  ngOnInit(): void {
    this.currentValue = '0%';
  }
}

