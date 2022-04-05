import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject, Output, EventEmitter } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TaskDTO } from '../../../../application/ports/secondary/task.dto';
import { GETS_ALL_TASK_DTO, GetsAllTaskDtoPort } from '../../../../application/ports/secondary/gets-all-task.dto-port';

import { REMOVES_TASK_DTO, RemovesTaskDtoPort } from '../../../../application/ports/secondary/removes-task.dto-port';

@Component({
  selector: 'lib-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent {

  constructor(
    @Inject(GETS_ALL_TASK_DTO) private _getsAllTaskDto: GetsAllTaskDtoPort,
    @Inject(REMOVES_TASK_DTO) private _removesTaskDto: RemovesTaskDtoPort) {
  }

  tasks$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll();
  deleteNotification: string = "Zadanie usunięte";
  showNotification: boolean = true;


  @Output() sendNotification = new EventEmitter<boolean>();
  @Output() sendMessage = new EventEmitter<string>();

  sendData() {
    this.sendNotification.emit(this.showNotification);
    this.sendMessage.emit(this.deleteNotification);
  }

  onDeleteClicked(id: any): void {
    this._removesTaskDto.remove(id);
  }
}
