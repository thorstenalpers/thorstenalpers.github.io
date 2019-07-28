import { NgModule } from '@angular/core';
import { SkillsComponent } from './skills.component';
import { SkillsRoutingModule } from './skills.routing.module';
import { SkillEntryComponent } from './skill-entry/skill-entry.component';
import { CommonModule } from '@angular/common';
import { SkillsService } from 'src/app/core/services/skills.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    SkillsRoutingModule, CommonModule, FormsModule
  ],
  exports: [
    SkillEntryComponent
  ],
  declarations: [
    SkillsComponent,
    SkillEntryComponent
  ],
  providers: [SkillsService]
})
export class SkillsModule { }
