import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject, Output, EventEmitter } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TaskDTO } from '../../../../application/ports/secondary/task.dto';
import { GETS_ALL_TASK_DTO, GetsAllTaskDtoPort } from '../../../../application/ports/secondary/gets-all-task.dto-port';
import { REMOVES_TASK_DTO, RemovesTaskDtoPort } from '../../../../application/ports/secondary/removes-task.dto-port';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SetsTaskDtoPort, SETS_TASK_DTO } from 'projects/task/src/lib/application/ports/secondary/sets-task.dto-port';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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
    @Inject(REMOVES_TASK_DTO) private _removesTaskDto: RemovesTaskDtoPort,
    @Inject(SETS_TASK_DTO) private _setTaskDto: SetsTaskDtoPort,
    private modalService: NgbModal,
    private _router: Router) { }

  tasks$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll().
    pipe(map(events => events.sort(
      (a, b) => new Date(b.dateOfCreated).getTime() - new Date(a.dateOfCreated).getTime())));
  deleteAlert: string = "Zadanie usunięte";
  showAlert: boolean = false;
  myDate = new Date();

  onDeleteClicked(id: any): void {
    this._removesTaskDto.remove(id);
    this.tasks$.subscribe(result => {
      if (result.length === 0) {
        this._router.navigate([''])
      }
    });
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
  }

  checkBox(task: any): void {
    if (task.isActive === false) {
      this._setTaskDto.set({
        id: task.id,
        isActive: true
      });
    } else {
      this._setTaskDto.set({
        id: task.id,
        isActive: false
      });
    }
  }

  alert() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Zadanie usunięte',
      showConfirmButton: false,
      timer: 1500
    })
  }



}
