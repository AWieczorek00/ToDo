import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({ selector: 'app-home-page', 
templateUrl: './home.page.html', 
encapsulation: ViewEncapsulation.None, 
changeDetection: ChangeDetectionStrategy.OnPush,})

export class HomePage {
    myDate = new Date();
    showLib : boolean = false;
    showNotification : boolean = false;
    creatNotification : string = "";


    receiveMessage($event: any){
        this.showLib = $event
    }

    receiveData($event:any){
        console.log("cos")
        this.showNotification =  $event
        // this.creatNotification = $creatNotification
    }
}
