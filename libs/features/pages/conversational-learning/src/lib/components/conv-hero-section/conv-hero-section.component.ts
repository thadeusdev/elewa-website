import { Component, Input, OnInit } from '@angular/core';

import { _heroText as sampleData } from '@elewa-website/data/ui/hero-text'
import { HeroText } from '@elewa-website/models/schema/ui/texts';
@Component({
  selector: 'elewa-website-conv-hero-section',
  templateUrl: './conv-hero-section.component.html',
  styleUrls: ['./conv-hero-section.component.scss'],
})
export class ConvHeroSectionComponent implements OnInit{
  @Input() heroText!: HeroText[];

  ngOnInit(){
    this.heroText = sampleData    
  }
}
