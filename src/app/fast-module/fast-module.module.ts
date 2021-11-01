import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FastModuleComponentComponent } from './fast-module-component/fast-module-component.component';
import {StudentModule} from "./student/student.module";

@NgModule({
  declarations: [
    FastModuleComponentComponent
  ],
  imports: [
    CommonModule,
    StudentModule
  ],
  exports:[
    FastModuleComponentComponent//For accessible to others modules property
  ]
})
export class FastModuleModule { }
