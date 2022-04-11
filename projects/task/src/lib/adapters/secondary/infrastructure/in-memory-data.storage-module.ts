import { NgModule } from '@angular/core';
import { InMemoryDataStorage } from './in-memory-data.storage';
import { DATA_DTO_STORAGE } from '../../../application/ports/secondary/data-dto.storage-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryDataStorage, { provide: DATA_DTO_STORAGE, useExisting: InMemoryDataStorage }, ],
  	exports: [] })
export class InMemoryDataStorageModule {
}
