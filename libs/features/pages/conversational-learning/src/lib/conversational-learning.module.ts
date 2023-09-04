import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationalLearningPageComponent } from './main/conversational-learning-page/conversational-learning-page.component';
import { ConvHeroSectionComponent } from './components/conv-hero-section/conv-hero-section.component';

import { ConversationalLearningRoutingModule } from './conversational-learning-routing.module';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

@NgModule({
  imports: [
    CommonModule,
    ConversationalLearningRoutingModule,
    TextsModule,
    ButtonsModule,
  ],
  declarations: [ConversationalLearningPageComponent, ConvHeroSectionComponent],
  exports: [ConversationalLearningPageComponent],
})
export class ConversationalLearningModule {}