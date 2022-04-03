import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_TASK_DTO, AddsTaskDtoPort } from '../../../../application/ports/secondary/adds-task.dto-port';

@Component({ selector: 'lib-add-task', templateUrl: './add-task.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class AddTaskComponent {
  readonly content: FormGroup = new FormGroup({ content: new FormControl() });

  showFrom: boolean = false;
  showButtonAddTask: boolean = true;
  addTask: boolean = false;

  constructor(@Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort) {
  }


  onContantSubmited(form: FormGroup): void {
    if (this.addTask) {
      this._addsTaskDto.add({
        content: form.get('content')?.value
      });
    }
    this.addTask = false;
    this.showFrom = false;
  }
}
