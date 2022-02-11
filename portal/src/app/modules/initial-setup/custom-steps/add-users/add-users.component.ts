import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  @Output() nextStep: EventEmitter<any> = new EventEmitter<any>();
  @Output() prevStep: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    this.createForm();
  }
  submit() {
    const users = {};
    this.nextStep.emit({ users });
  }
  createForm() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  goBack() {
    this.prevStep.emit();
  }
}
