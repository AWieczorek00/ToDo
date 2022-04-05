import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';


@NgModule({ imports: [CommonModule],
  	declarations: [TasksComponent],
  	providers: [],
  	exports: [TasksComponent] })
export class TasksComponentModule {
}
