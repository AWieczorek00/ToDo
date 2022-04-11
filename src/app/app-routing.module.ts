import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { TaskPageModule } from './pages/task.page-module';

const routes: Routes = [{ 
        path: '', 
        loadChildren: () => HomePageModule
      },
  { 
        path: 'zadania', 
        loadChildren: () => TaskPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
