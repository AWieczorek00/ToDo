import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DataDTO } from '../../../application/ports/secondary/data.dto';
import { DataDtoStoragePort } from '../../../application/ports/secondary/data-dto.storage-port';

@Injectable()
export class InMemoryDataStorage extends ReplaySubject<DataDTO> implements DataDtoStoragePort {
}
