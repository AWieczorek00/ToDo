import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { HomeComponentModule } from '../../../projects/home/src/lib/adapters/primary/ui/home.component-module';
import { TasksComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/tasks/tasks.component-module';
import { FirebaseTaskServiceModule } from '../../../projects/task/src/lib/adapters/secondary/infrastructure/firebase-task.service-module';
import { AddTaskComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/add-task/add-task.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HomePage,
        }
      ]),
  HomeComponentModule,
  TasksComponentModule,
  FirebaseTaskServiceModule,
  AddTaskComponentModule
],
  	declarations: [HomePage],
  	providers: [],
  	exports: [] })
export class HomePageModule {
  
    
}
