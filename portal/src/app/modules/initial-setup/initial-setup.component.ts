import { Component, OnInit, HostBinding } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { PendingApprovalService } from 'src/app/service/pending-approval.service';

@Component({
  selector: 'app-initial-setup',
  templateUrl: './initial-setup.component.html',
  styleUrls: ['./initial-setup.component.scss'],
})
export class InitialSetupComponent implements OnInit {
  @HostBinding('class') class = 'd-flex flex-column flex-root';
  orgData: any = [];
  currentData: any = {};

  currentStep$: BehaviorSubject<number> = new BehaviorSubject(1);
  isCurrentFormValid$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );
  canContinue: any = {
    '1': false,
    '2': false,
    '3': false,
    '4': false,
  };
  private unsubscribe: Subscription[] = [];
  constructor(private readonly pendingApprovalSrvc: PendingApprovalService) {}

  ngOnInit(): void {}

  nextStep(event: any) {
    const nextStep = this.currentStep$.value + 1;
    this.currentData = { ...this.currentData, ...event };
    this.currentStep$.next(nextStep);
    this.canContinue[nextStep] = false;

    if (nextStep === this.steps.length) {
      return this.orgData.push(this.currentData);
    }
  }

  prevStep(event: any) {
    const prevStep = this.currentStep$.value - 1;
    if (prevStep === 0) {
      return;
    }
    this.currentStep$.next(prevStep);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  isFormValid(canContinue: any, i: number) {
    this.canContinue[i] = canContinue;
    console.log(this.canContinue);
  }

  get steps() {
    return [
      { order: 1, title: 'User', description: 'Setup Your User Details' },
      {
        order: 2,
        title: 'Organization Profile',
        description: 'Setup Your Organization Profile',
      },
      { order: 3, title: 'Company', description: 'Setup Your Company Details' },
      { order: 4, title: 'Add Users', description: 'Setup Users' },
      { order: 5, title: 'Completed', description: 'Woah, we are here' },
    ];
  }

  createCompany(e: any) {
    this.currentStep$ = new BehaviorSubject(2);
  }

  submit(e: any) {
    const data = {
      type: 'OrgCreationRequest',
      requestData: JSON.stringify(this.orgData),
    };
    this.pendingApprovalSrvc.create(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => console.error(error)
    );
  }
}
