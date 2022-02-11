import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialSetupComponent } from './initial-setup.component';

const routes: Routes = [
  {
    path: '',
    component: InitialSetupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitialSetupRoutingModule { }
