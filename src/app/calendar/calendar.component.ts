import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCalendarCellCssClasses, MatCalendar, MatCalendarCellClassFunction, MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import moment from 'moment';

import { default as _rollupMoment, Moment } from 'moment';

import { DateRange, MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER } from '@angular/material/datepicker';

/*import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY'
  },

  display:{
    dateInput:'DD-MM-YYYY',
    monthYearLabel:'MMM YYYY',
    dateAllLabel:'LL',
    monthYearAllLabel:'MMM YYYY'
  }
}*/


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [

    /*{
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {
      provide:MAT_DATE_FORMATS, useValue:MY_FORMATS
    }*/
  ]
})
export class CalendarComponent implements OnInit {

  @ViewChild('calendar', { static: true }) calendar!: MatCalendar<Date>;
  //selectedDate: any;
  //minDate: string | null = null;
  //datehighlight = ["2021-06-05T18:30:00.000Z", "2021-06-06T18:30:00.000Z", "2021-06-07T18:30:00.000Z", "2021-06-09T18:30:00.000Z", "2021-06-08T18:30:00.000Z", "2021-06-10T18:30:00.000Z", "2021-06-11T18:30:00.000Z"];

  sampleRange!: DateRange<Date>;




  constructor(private fb: FormBuilder) {
    this.refreshDR();
  }

  select = this.fb.group({
    start: [],
    end: []
  });

  timeValue1 = this.fb.group({
    time1: []
  });

  custom = this.fb.group({
    value1: [],
    value2: []
  });

  timeValue2 = this.fb.group({
    time2: [],
    time3: []
  })

  // first: any = new Date(this.select.get('start')?.value);

  first: any = new Date(this.select.get('start')?.value);
  last: any = new Date(this.select.get('end')?.value);

  value1: any = new Date(this.custom.get('value1')?.value);
  value2: any = new Date(this.custom.get('value2')?.value);

  minDate: any = new Date();
  maxDate: any = new Date();

  selectedDate: any;


  /*dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      console.log(date);
      const highlightDate = this.datehighlight.map(strDate => new Date(strDate)).some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear());
      return highlightDate ? 'special-date' : '';
    };
  }*/







  changeDate1 = (type: string, event1: MatDatepickerInputEvent<Date>): any => {
    this.first = event1.value;
    console.log(`${type}: ${event1.value}`);
    this.minDate = new Date(this.first);
  }

  changeDate2 = (type: string, event2: MatDatepickerInputEvent<Date>): any => {
    this.last = event2.value;
    console.log(`${type}: ${event2.value}`);
    this.maxDate = new Date(this.last);
  }
  changeDate3 = (type: string, event3: MatDatepickerInputEvent<Date>): any => {
    this.value1 = event3.value;
    console.log(`${type}: ${event3.value}`);
    //this.selectedDate = new Date(this.value1);

  }

  changeDate4 = (type: string, event4: MatDatepickerInputEvent<Date>): any => {
    this.value2 = event4.value;
    console.log(`${type}: ${event4.value}`);
  }

  /*sampleClass: MatCalendarCellClassFunction<Date> = (cellDate: any, view: any) => {
    if (view === 'month') {
      const date = cellDate.getDate();
      return (date === new Date(this.value1) || date === 2) ? 'example-custom-date-class' : '';
    }
    return '';
  }*/

  refreshDR() {
    this.sampleRange = new DateRange((() => {
      let v1 = new Date();
      let v2 = new Date();

      v1.setDate(v1.getDate() + v2.getDate());
      return v1
    })(), new Date());
  }





  ngOnInit(): void {
  }

}
