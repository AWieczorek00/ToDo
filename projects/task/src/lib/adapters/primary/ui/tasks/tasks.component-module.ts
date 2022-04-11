import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule,AlertConfig } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule,BsDropdownConfig } from 'ngx-bootstrap/dropdown';



@NgModule({ imports: [CommonModule,
	AccordionModule,
	AlertModule,
	ButtonsModule,
	FormsModule,
	CarouselModule,
	CollapseModule,
	BsDatepickerModule.forRoot(),
	BsDropdownModule],
  	declarations: [TasksComponent],
  	providers: [],
  	exports: [TasksComponent] })
export class TasksComponentModule {
}
