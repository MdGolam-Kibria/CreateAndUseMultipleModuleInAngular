import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponentComponent } from './student-details-component/student-details-component.component';



@NgModule({
    declarations: [
        StudentDetailsComponentComponent
    ],
    exports: [
        StudentDetailsComponentComponent
    ],
    imports: [
        CommonModule
    ]
})
export class StudentDetailsModule { }
