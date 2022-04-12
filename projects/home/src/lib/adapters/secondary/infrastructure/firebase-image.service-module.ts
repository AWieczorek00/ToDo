import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseImageService } from './firebase-image.service';
import { GETS_ALL_IMAGE_DTO } from '../../../application/ports/secondary/gets-all-image.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseImageService, { provide: GETS_ALL_IMAGE_DTO, useExisting: FirebaseImageService }],
  	exports: [] })
export class FirebaseImageServiceModule {
}
