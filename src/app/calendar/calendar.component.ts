import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatCalendarCellCssClasses, MatCalendar, MatCalendarCellClassFunction, MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
export class CalendarComponent implements OnInit, AfterViewInit {

  @ViewChild('calendar', { static: true }) calendar!: MatCalendar<Date>;
  //selectedDate: any;
  //minDate: string | null = null;


  datehighlight = ["2021-06-05T18:30:00.000Z", "2021-06-06T18:30:00.000Z", "2021-06-07T18:30:00.000Z", "2021-06-09T18:30:00.000Z", "2021-06-08T18:30:00.000Z", "2021-06-10T18:30:00.000Z", "2021-06-11T18:30:00.000Z"];

  sampleRange!: DateRange<Date>;

  //test1:any=document.getElementById('calendar')?.style.background;



  constructor(private fb: FormBuilder) {
    this.refreshDR();
  }

  /* Boundary Date Range */
  select = this.fb.group({
    start: [''],
    end: ['']
  });

  /* Boundary time*/
  timeValue1 = this.fb.group({
    time1: [''],
    time2: ['']
  });


  /*Start and End date in date range*/
  custom = this.fb.group({
    value1: ['', Validators.required],
    value2: ['', Validators.required]
  });


  /* start time and end time*/
  timeValue2 = this.fb.group({
    time3: [''],
    time4: ['']
  })

  // first: any = new Date(this.select.get('start')?.value);

  first: any = moment(this.select.get('start')?.value).format('DD-MM-YYYY');
  last: any = moment(this.select.get('end')?.value).format('DD-MM-YYYY');

  value1: any = moment(this.custom.get('value1')?.value).format('DD-MM-YYYY');
  value2: any = moment(this.custom.get('value2')?.value).format('DD-MM-YYYY');

  time1: any = moment(this.timeValue1.get('time1')?.value).format('HH:mm');
  time2: any = moment(this.timeValue1.get('time2')?.value).format('HH:mm');

  time3: any = moment(this.timeValue2.get('time3')?.value).format('HH:mm');
  time4: any = moment(this.timeValue2.get('time4')?.value).format('HH:mm');

  minDate: any = new Date();
  maxDate: any = new Date();

  selectedDate: any;










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


  timeChange1 = (data: any): any => {
    this.time1 = data.target.value;
    console.log('Boundary Start Time', this.time1);
  }

  timeChange2 = (data: any): any => {
    this.time2 = data.target.value;
    console.log('Boundary End Time', this.time2);
  }


  timeChange3 = (data1: any): any => {
    this.time3 = data1.target.value;
    console.log('Start Time', this.time3);
  }

  timeChange4 = (data2: any): any => {
    this.time4 = data2.target.value;
    console.log('End Time', this.time4);
  }

  /*sampleClass: MatCalendarCellClassFunction<Date> = (cellDate: any, view: any) => {
    if (view === 'month') {
      const date = cellDate.getDate();
      return (date === new Date(this.value1) || date === 2) ? 'example-custom-date-class' : '';
    }
    return '';
  }*/

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      console.log(date);
      const highlightDate = this.datehighlight.map(strDate => new Date(strDate)).some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear());
      return highlightDate ? 'special-date' : '';
    };
  }

  refreshDR() {
    this.sampleRange = new DateRange((() => {

      let v11 = new Date(this.first, this.time1);

      let v1 = new Date(this.value1);
      let v2 = new Date(this.value2);

      let t1 = new Date(this.time3);
      let t2 = new Date(this.time4);


      v1.setDate(v1.getDate() + v2.getDate());

      //(document.getElementsByClassName('mat-calendar-table')[0] as any).style.backgroundColor = "green";

      console.log(document.getElementsByClassName('mat-calendar'));

      //t1.setTime(t1.getTime() + t1.getTime());

      return v1

    })(), new Date(this.value1, this.time1));

  }


  sample() {
    let currentDate = new Date(this.value1 - 1);
    let endDate = new Date(this.value2 - 1);

    while (currentDate <= endDate) {
      currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
      console.log(currentDate.getDate());
    }
  }




  /* validation methods*/

  getstart() {
    if (this.custom.controls['value1'].hasError('required')) {
      return 'start date'
    }

    return '';
  }

  getend() {
    if (this.custom.controls['value2'].hasError('required')) {
      return 'end date';
    }

    return '';
  }

  ngAfterViewInit() {

  }





  ngOnInit(): void {

  }

}
