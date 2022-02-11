import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  userForm: FormGroup;

  @Output() nextStep: EventEmitter<any> = new EventEmitter<any>();
  constructor(private readonly userSrvc: UserService) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.userForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      organizationId: new FormControl(1),
    });
  }

  submit() {
    const currentUser = this.userForm.value;
    return this.nextStep.emit({ currentUser });
  }
}
