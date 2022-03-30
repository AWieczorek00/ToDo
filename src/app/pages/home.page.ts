import { DatePipe } from '@angular/common';
import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({ selector: 'app-home-page', 
templateUrl: './home.page.html', 
encapsulation: ViewEncapsulation.None, 
changeDetection: ChangeDetectionStrategy.OnPush,})

export class HomePage {
    myDate = new Date();
}