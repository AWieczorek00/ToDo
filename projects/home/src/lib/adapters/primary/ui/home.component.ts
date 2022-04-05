import { Component, ViewEncapsulation, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';


@Component({ selector: 'lib-home', templateUrl: './home.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })

export class HomeComponent {
    showFromAndTasks: boolean = false;
    showLib : boolean = true;

    @Output() messageEvent = new EventEmitter<boolean>();


    sendMessage(){
        this.messageEvent.emit(this.showLib);
    }

}
