import {
  Component,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { KpiService } from 'src/app/service/kpi.service';

@Component({
  selector: 'app-create-folder-modal',
  templateUrl: './create-folder-modal.component.html',
  styleUrls: ['./create-folder-modal.component.scss'],
})
export class CreateFolderModalComponent implements OnInit {
  folderForm: FormGroup;
  @ViewChild('CreateFolderModalRef', { static: true })
  createFolderRef: TemplateRef<any>;
  @Output() content: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private readonly kpiService: KpiService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  ngAfterViewInit() {
    this.content.emit(this.createFolderRef);
  }

  createForm() {
    this.folderForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }

  submit() {
    const data = this.folderForm.value;
    this.kpiService.createDriver(data).subscribe(
      (response) => this.openSnackBar('Driver created', 'close'),
      ({ error }) => this.openSnackBar(error?.message, 'close')
    );
  }
}
