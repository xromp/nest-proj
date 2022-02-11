import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { KpiService } from 'src/app/service/kpi.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CreateFolderModalComponent } from '../create-folder-modal/create-folder-modal.component';
@Component({
  selector: 'app-list-driver',
  templateUrl: './list-driver.component.html',
  styleUrls: ['./list-driver.component.scss'],
})
export class ListDriverComponent implements OnInit {
  drivers: any;
  libraries: any;
  selectedLibrary: any;
  modal: any = {};
  closeResult = '';
  constructor(
    private _snackBar: MatSnackBar,
    private readonly kpiService: KpiService,
    private modalService: NgbModal
  ) {
    this.filterDriver = this.filterDriver.bind(this);
  }

  ngOnInit(): void {
    this.getDrivers();
    this.getLibraries();
  }

  modalContent(content: any) {
    const modalId =
      content?.elementRef?.nativeElement?.parentElement?.localName;
    this.modal[modalId] = content;
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'close', {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }

  getDrivers() {
    this.kpiService.getDrivers().subscribe(
      (response) => {
        this.drivers = response;
      },
      ({ message }) => this.openSnackBar(message)
    );
  }

  getLibraries() {
    this.kpiService.getKPILibrary().subscribe(
      (response) => {
        this.libraries = [{ name: 'All', active: true }, ...response];
      },
      ({ message }) => this.openSnackBar(message)
    );
  }

  selectLibrary(library: any) {
    this.selectedLibrary = library;
    this.libraries.map(
      (library: any, i: number) => (this.libraries[i].active = false)
    );
    library.active = true;
  }

  filterDriver(driver: any) {
    return this.selectedLibrary?.id
      ? driver.libraryId === this.selectedLibrary?.id
      : true;
  }

  open(modalId: any) {
    console.log(this.modal);
    this.modalService
      .open(this.modal[modalId], { ariaLabelledBy: 'create-folder-modal' })
      .result.then(
        (folder) => {
          this.kpiService.createKPILibrary(folder).subscribe((response) => {
            this._snackBar.open('Library created.');
          });
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          console.log(reason);
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
