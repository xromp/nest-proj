import {
  Component,
  forwardRef,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { merge, Observable, OperatorFunction, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';
import * as moment from 'moment-timezone';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-typehead',
  templateUrl: './typehead.component.html',
  styleUrls: ['./typehead.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TypeheadComponent),
      multi: true,
    },
  ],
})
export class TypeheadComponent implements OnInit, ControlValueAccessor {
  public model: any;

  @Input() data: any[];
  // @ViewChild('valueAccessor', { read: NG_VALUE_ACCESSOR })
  // valueAccessor: ControlValueAccessor;
  // value = 'asdf';
  // onChange: any = (e: any) => {
  //   this.value = e;
  // };
  // onTouched: any = () => {};
  // disabled = false;
  formatter = (item: any) => item.name;

  @ViewChild(FormControlDirective, { static: true })
  formControlDirective: FormControlDirective;
  @ViewChild('instance', { static: true }) instance: NgbTypeahead;
  @Input() formControl: FormControl;
  @Input() formControlName: string;
  private jsonString: string;
  private parseError: boolean;
  private item: any;

  focus$ = new Subject<string>();
  click$ = new Subject<string>();
  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {}

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.click$.pipe(
      filter(() => !this?.instance?.isPopupOpen())
    );

    const inputFocus$ = this.focus$;
    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map((term) => {
        return (
          term === ''
            ? this.data
            : this.data?.filter(
                (v: any) =>
                  v.name?.toLowerCase().indexOf(term?.toLowerCase()) > -1
              )
        )?.slice(0, 10);
      })
    );
  };

  public writeValue(obj: any) {
    if (obj) {
      this.item = obj;
      this.jsonString = JSON.stringify(this.item, undefined, 4);
    }
  }

  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  public validate(c: FormControl) {
    return !this.parseError
      ? null
      : {
          jsonParseError: {
            valid: false,
          },
        };
  }

  public registerOnTouched() {}

  // change events from the textarea
  onChange(event: any) {
    const newValue = event?.id;
    try {
      this.item = newValue;
      this.parseError = false;
    } catch (ex) {
      this.parseError = true;
    }
    this.propagateChange(this.item);
  }
  private propagateChange = (_: any) => {};
}
