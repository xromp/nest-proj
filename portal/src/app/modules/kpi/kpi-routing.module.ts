import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDriverComponent } from './create-driver/create-driver.component';
import { CreateComponent } from './create/create.component';
import { KpiComponent } from './kpi.component';
import { ListDriverComponent } from './list-driver/list-driver.component';

const routes: Routes = [
  {
    path: '',
    component: KpiComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'driver/create',
    component: CreateDriverComponent,
  },
  {
    path: 'driver',
    component: ListDriverComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KpiRoutingModule {}
