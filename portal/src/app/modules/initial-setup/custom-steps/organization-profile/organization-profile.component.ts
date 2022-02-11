import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment-timezone';
import { Subject } from 'rxjs';
import { OrgService } from 'src/app/service/org.service';
import { UtilService } from 'src/app/service/util.service';

@Component({
  selector: 'app-organization-profile',
  templateUrl: './organization-profile.component.html',
})
export class OrganizationProfileComponent implements OnInit {
  model: any;

  @ViewChild('instance', { static: true }) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  countries: [];

  orgForm: FormGroup;
  @Output() nextStep: EventEmitter<any> = new EventEmitter<any>();
  @Output() prevStep: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private readonly utilSrvc: UtilService,
    private readonly orgSrvc: OrgService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getCountries();
  }

  createForm() {
    this.orgForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      timezone: new FormControl(moment.tz.guess(), [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
    });
  }

  goBack() {
    this.prevStep.emit();
  }

  submit() {
    const org = this.orgForm.value;
    this.nextStep.emit({ org });
  }

  getCountries() {
    this.utilSrvc.getCountries().subscribe((response: any) => {
      this.countries = response.map(({ name }: any) => ({
        name: name?.common,
        id: name?.common,
      }));
    });
  }

  get timezones() {
    return moment.tz.names().map((name) => ({ name, id: name }));
  }
}
