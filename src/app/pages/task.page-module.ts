import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskPage } from './task.page';
import { TasksComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/tasks/tasks.component-module';
import { FirebaseTaskServiceModule } from '../../../projects/task/src/lib/adapters/secondary/infrastructure/firebase-task.service-module';
import { AddTaskComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/add-task/add-task.component-module';
import { NavbarComponentModule } from '../../../projects/home/src/lib/adapters/primary/ui/navbar.component-module';
import { FirebaseImageServiceModule } from '../../../projects/home/src/lib/adapters/secondary/infrastructure/firebase-image.service-module';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TaskPage,
      }
    ]),
    TasksComponentModule,
    FirebaseTaskServiceModule,
    AddTaskComponentModule,
    NavbarComponentModule,
    FirebaseImageServiceModule,
  ],
  declarations: [TaskPage],
  providers: [],
  exports: []
})
export class TaskPageModule {
}
