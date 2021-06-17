import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCalendarCellCssClasses, MatCalendar, MatCalendarCellClassFunction, MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @ViewChild('calendar', { static: true }) calendar!: MatCalendar<Date>;
  //selectedDate: any;
  //minDate: string | null = null;
  datehighlight = ["2021-06-05T18:30:00.000Z", "2021-06-06T18:30:00.000Z", "2021-06-07T18:30:00.000Z", "2021-06-09T18:30:00.000Z", "2021-06-08T18:30:00.000Z", "2021-06-10T18:30:00.000Z", "2021-06-11T18:30:00.000Z"];




  constructor(private fb: FormBuilder) { }

  select = this.fb.group({
    start: [],
    end: []
  });

  custom = this.fb.group({
    value1: [],
    value2: []
  });

  first: any = new Date(this.select.get('start')?.value);
  last: any = new Date(this.select.get('end')?.value);

  value1: any = new Date(this.custom.get('value1')?.value);
  value2: any = new Date(this.custom.get('value2')?.value);

  minDate: any = new Date();
  maxDate: any = new Date();

  selectedDate = new Date();


  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      console.log(date);
      const highlightDate = this.datehighlight.map(strDate => new Date(strDate)).some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear());
      return highlightDate ? 'special-date' : '';
    };
  }

  sampleClass: MatCalendarCellClassFunction<Date> = (cellDate: any, view: any) => {
    if (view === 'month') {
      const date = cellDate.getDate();
      return (date === 1 || date === 20 || date === 25) ? 'example-custom-date-class' : '';
    }
    return '';
  }


  
  
  
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
    this.selectedDate = new Date(this.value1);

  }

  changeDate4 = (type: string, event4: MatDatepickerInputEvent<Date>): any => {
    this.value2 = event4.value;
    console.log(`${type}: ${event4.value}`);
  }

  

  ngOnInit(): void {
  }

}
