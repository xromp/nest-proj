import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { InitialSetupRoutingModule } from './initial-setup-routing.module';
import { InitialSetupComponent } from './initial-setup.component';
import { UserComponent } from './custom-steps/user/user.component';
import { OrganizationProfileComponent } from './custom-steps/organization-profile/organization-profile.component';
import { AddUserComponent } from './custom-steps/add-users/add-users.component';
import { CompletedComponent } from './custom-steps/completed/completed.component';
import { CreateCompanyComponent } from './custom-steps/create-company/create-company.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    InitialSetupComponent,
    UserComponent,
    OrganizationProfileComponent,
    AddUserComponent,
    CompletedComponent,
    CreateCompanyComponent,
  ],
  imports: [
    CommonModule,
    InitialSetupRoutingModule,
    InlineSVGModule,
    SharedModule,
  ],
})
export class InitialSetupModule {}
