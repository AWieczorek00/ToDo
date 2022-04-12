import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Output, EventEmitter, Inject } from '@angular/core';
import { ADDS_TASK_DTO, AddsTaskDtoPort } from '../../../../application/ports/secondary/adds-task.dto-port';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';

@Component({ selector: 'lib-add-task', templateUrl: './add-task.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class AddTaskComponent {

  constructor(@Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort) {
  }

  readonly content: FormGroup = new FormGroup({ content: new FormControl() });

  showFrom: boolean = false;
  showButtonAddTask: boolean = true;
  addTask: boolean = false;
  showNotification: boolean = true;
  creatNotification: string = "Zadanie stworzone";


  @Output() sendNotification = new EventEmitter<boolean>();
  // @Output() sendMessage = new EventEmitter<string>();


  sendMessage() {
    this.sendNotification.emit(this.showNotification);
    
  }

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
      return
    }
    if (this.addTask) {
      this._addsTaskDto.add({
        content: form.get('content')?.value,
        isActive: false,
        dateOfCreated:  formatDate(new Date(), 'dd-MM-yyyy HH:mm','en')
      });
    }
    this.addTask = false;
    this.showFrom = false;
  }
}
