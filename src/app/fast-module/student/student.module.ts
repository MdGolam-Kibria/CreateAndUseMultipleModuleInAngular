import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponentComponent } from './student-component/student-component.component';
import {StudentDetailsModule} from "./student-details/student-details.module";



@NgModule({
  declarations: [
    StudentComponentComponent
  ],
  imports: [
    CommonModule,
    StudentDetailsModule//for access from student module
  ],
  exports:[StudentComponentComponent]
})
export class StudentModule { }
