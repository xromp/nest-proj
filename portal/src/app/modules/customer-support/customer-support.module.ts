import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSupportComponent } from './customer-support.component';
import { OverviewComponent } from './overview/overview.component';
import { CustomerSupportRoutingModule } from './customer-support-routing.module';
import { TicketsComponent } from './tickets/tickets.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { FaqComponent } from './faq/faq.component';
import { LicensesComponent } from './licenses/licenses.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

//importing boostrap 5 module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CustomerSupportComponent,
    OverviewComponent,
    TicketsComponent,
    TutorialsComponent,
    FaqComponent,
    LicensesComponent,
    ContactUsComponent,
  ],
  imports: [CommonModule, CustomerSupportRoutingModule, NgbModule],
})
export class CustomerSupportModule {}
