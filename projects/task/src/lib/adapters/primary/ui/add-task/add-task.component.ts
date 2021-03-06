import { Component, ViewEncapsulation, ChangeDetectionStrategy, Output, EventEmitter, Inject } from '@angular/core';
import { ADDS_TASK_DTO, AddsTaskDtoPort } from '../../../../application/ports/secondary/adds-task.dto-port';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

@Component({ selector: 'lib-add-task', templateUrl: './add-task.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class AddTaskComponent {

  constructor(@Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort) {
  }

  readonly content: FormGroup = new FormGroup({ content: new FormControl() });

  showFrom: boolean = false;
  showButtonAddTask: boolean = true;
  addTask: boolean = false;
  taskText = '';


  alert(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Zadanie dodane',
      showConfirmButton: false,
      timer: 1500
    })
  }


  onContantSubmited(form: FormGroup): void {
    if (form.invalid) {
      this.addTask = false;
      this.showFrom = false;
      this.taskText='';
      return
    }
    if (this.addTask) {
      this._addsTaskDto.add({
        content: form.get('content')?.value,
        isActive: false,
        dateOfCreated:  formatDate(new Date(), 'dd-MM-yyyy HH:mm:ss','en')
      });
      this.taskText='';
    }
    this.addTask = false;
    this.showFrom = false;
    this.taskText='';
  }
}
