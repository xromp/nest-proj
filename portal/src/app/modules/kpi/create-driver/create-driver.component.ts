import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ETargetType } from 'src/app/models/driver.model';

import { KpiService } from 'src/app/service/kpi.service';

@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.component.html',
  styleUrls: ['./create-driver.component.scss'],
})
export class CreateDriverComponent implements OnInit {
  driverForm: FormGroup;
  targetTypes: any = Object.values(ETargetType);
  kpiLibraries: any = [];

  constructor(
    private _snackBar: MatSnackBar,
    private readonly kpiService: KpiService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getKPILibraries();
  }

  createForm() {
    this.driverForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      abbreviation: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      uom: new FormControl('', [Validators.required]),
      aggregation: new FormControl('', [Validators.required]),
      decimal: new FormControl('', [Validators.required]),
      targetType: new FormControl('', [Validators.required]),
      libraryId: new FormControl(1, [Validators.required]),
    });
  }

  getKPILibraries() {
    this.kpiService.getKPILibrary().subscribe((response) => {
      this.kpiLibraries = response;
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }

  submit() {
    const data = this.driverForm.value;
    this.kpiService.createDriver(data).subscribe(
      (response) => this.openSnackBar('Driver created', 'close'),
      ({ error }) => this.openSnackBar(error?.message, 'close')
    );
  }
}
