import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { HomeComponentModule } from '../../../projects/home/src/lib/adapters/primary/ui/home.component-module';
import { TasksComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/tasks/tasks.component-module';
import { FirebaseTaskServiceModule } from '../../../projects/task/src/lib/adapters/secondary/infrastructure/firebase-task.service-module';
import { AddTaskComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/add-task/add-task.component-module';
import { NavbarComponentModule } from '../../../projects/home/src/lib/adapters/primary/ui/navbar.component-module';
import { ImageCardComponentModule } from '../../../projects/home/src/lib/adapters/primary/ui/image-card.component-module';
import { FirebaseImageServiceModule } from '../../../projects/home/src/lib/adapters/secondary/infrastructure/firebase-image.service-module';

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
  AddTaskComponentModule,
  NavbarComponentModule,
  ImageCardComponentModule,
  FirebaseImageServiceModule
],
  	declarations: [HomePage],
  	providers: [],
  	exports: [] })
export class HomePageModule {
  
    
}
