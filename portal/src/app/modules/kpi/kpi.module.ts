import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KpiRoutingModule } from './kpi-routing.module';
import { KpiComponent } from './kpi.component';
import { CreateComponent } from './create/create.component';
import { CreateDriverComponent } from './create-driver/create-driver.component';
import { ListDriverComponent } from './list-driver/list-driver.component';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateFolderModalComponent } from './create-folder-modal/create-folder-modal.component';
import { CreateDriverModalComponent } from './create-driver-modal/create-driver-modal.component';
@NgModule({
  declarations: [
    KpiComponent,
    CreateComponent,
    CreateDriverComponent,
    CreateFolderModalComponent,
    ListDriverComponent,
    FilterPipe,
    CreateDriverModalComponent,
  ],
  imports: [CommonModule, KpiRoutingModule, SharedModule],
})
export class KpiModule {}
