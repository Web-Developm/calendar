import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCalendarCellCssClasses, MatCalendar } from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @ViewChild('calendar', { static: true }) calendar!: MatCalendar<Date>;
  selectedDate: any;
  minDate: string | null = null;
  datehighlight = ["2021-06-05T18:30:00.000Z", "2021-06-06T18:30:00.000Z", "2021-06-07T18:30:00.000Z", "2021-06-09T18:30:00.000Z", "2021-06-08T18:30:00.000Z", "2021-06-10T18:30:00.000Z", "2021-06-11T18:30:00.000Z"];



  constructor() { }

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      console.log(date);
      const highlightDate = this.datehighlight.map(strDate => new Date(strDate)).some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear());
      return highlightDate ? 'special-date' : '';
    };
  }

  ngOnInit(): void {
  }

}
