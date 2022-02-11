import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { VerticalComponent } from './vertical/vertical.component';
import { WizardsRoutingModule } from './wizards-routing.module';
import { WizardsComponent } from './wizards.component';
import { Step1Component } from './steps/step1/step1.component';
import { Step2Component } from './steps/step2/step2.component';
import { Step3Component } from './steps/step3/step3.component';
import { Step4Component } from './steps/step4/step4.component';
import { Step5Component } from './steps/step5/step5.component';
import { UpdateDataComponent } from './custom-steps/update-data/update-data.component';
import { CompanyProfileComponent } from './custom-steps/company-profile/company-profile.component';
import { ChartOfAccountsComponent } from './custom-steps/chart-of-accounts/chart-of-accounts.component';
import { DriversComponent } from './custom-steps/drivers/drivers.component';
import { DepartmentsComponent } from './custom-steps/departments/departments.component';
import { ProjectsComponent } from './custom-steps/projects/projects.component';
import { ResponsibilityCentersComponent } from './custom-steps/responsibility-centers/responsibility-centers.component';
import { UsersComponent } from './custom-steps/users/users.component';
import { ProfitAndLossComponent } from './custom-steps/chart-of-accounts/profit-and-loss/profit-and-loss.component';
import { BalanceSheetComponent } from './custom-steps/chart-of-accounts/balance-sheet/balance-sheet.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HorizontalComponent,
    VerticalComponent,
    WizardsComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    UpdateDataComponent,
    CompanyProfileComponent,
    ChartOfAccountsComponent,
    DriversComponent,
    DepartmentsComponent,
    ProjectsComponent,
    ResponsibilityCentersComponent,
    UsersComponent,
    ProfitAndLossComponent,
    BalanceSheetComponent,
  ],
  imports: [
    CommonModule,
    WizardsRoutingModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbTooltipModule,
    NgbModule,
  ],
})
export class WizardsModule {}
