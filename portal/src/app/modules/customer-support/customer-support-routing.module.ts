import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerSupportComponent } from './customer-support.component';
import { FaqComponent } from './faq/faq.component';
import { LicensesComponent } from './licenses/licenses.component';
import { OverviewComponent } from './overview/overview.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TutorialsComponent } from './tutorials/tutorials.component';

const routes: Routes = [
  {
    path: '',
    component:CustomerSupportComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'tickets',
        component: TicketsComponent
      },
      {
        path: 'tutorials',
        component: TutorialsComponent
      },
      { 
        path: 'faq',
        component: FaqComponent
      },
      {
        path: 'licenses',
        component: LicensesComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: '**', redirectTo: 'overview', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerSupportRoutingModule { }
