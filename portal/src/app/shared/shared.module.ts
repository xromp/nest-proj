import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoaderComponent } from './components/loader/loader.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { TypeheadComponent } from './components/typehead/typehead.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [ModalComponent, LoaderComponent, TypeheadComponent, AlertComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbTypeaheadModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    LoaderComponent,
    TypeheadComponent,
  ],
})
export class SharedModule {}
