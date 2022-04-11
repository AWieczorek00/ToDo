import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DataDTO } from './data.dto';

export const DATA_DTO_STORAGE = new InjectionToken<DataDtoStoragePort>('DATA_DTO_STORAGE');

export interface DataDtoStoragePort {
  next(item: Partial<DataDTO | undefined>): void;
  asObservable(): Observable<DataDTO>;
}
