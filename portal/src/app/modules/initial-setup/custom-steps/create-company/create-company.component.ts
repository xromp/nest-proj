import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss'],
})
export class CreateCompanyComponent implements OnInit {
  companyForm: FormGroup;

  @Output() nextStep: EventEmitter<any> = new EventEmitter<any>();
  @Output() prevStep: EventEmitter<any> = new EventEmitter<any>();
  constructor(private readonly companySrvc: CompanyService) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.companyForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    const company = this.companyForm.value;
    this.nextStep.emit({ company });
  }

  goBack() {
    this.prevStep.emit();
  }
}
