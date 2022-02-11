import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
})
export class CompletedComponent implements OnInit {
  constructor() {}

  @Output() createAnotherCompany: EventEmitter<any> = new EventEmitter<any>();
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {}

  createCompany() {
    this.createAnotherCompany.emit();
  }

  done() {
    this.submit.emit();
  }
}
