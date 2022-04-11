import { Component, ViewEncapsulation, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({ selector: 'lib-home', templateUrl: './home.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })

export class HomeComponent {
    showFromAndTasks: boolean = false;
    


    sendMessage(){
        console.log(RouterLink)
    }

}
