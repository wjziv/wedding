import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Location, Event, engagementParty } from './events';

import { CalendarOptions, GoogleCalendar } from 'datebook';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.sass']
})
export class EventComponent {
  event = engagementParty;

  addToCalendar() {
    const config: CalendarOptions = {
      title: 'Walter & Nicole\'s ' + this.event.name,
      location: this.event.location.address,
      description: 'Let\'s celebrate with SO MUCH BOOZE.',
      start: new Date(this.event.start_datetime),
      end: new Date(this.event.end_datetime)
    }

    const googleCalendar = new GoogleCalendar(config)

    window.open(
      googleCalendar.render(),
      '_blank'
    )
  }

  bookRide() {

    window.open(
      "https://m.uber.com/ul/?".concat(
        "action=setPickup&",
        "client_id=yGyKPlmbljwC5-FFPZ9G00l0K_uVX4ty&",
        "pickup=my_location&",
        "dropoff[formatted_address]=" + this.event.location.address + "&",
        "dropoff[latitude]=" + this.event.location.latitude + "&",
        "dropoff[longitude]=" + this.event.location.longitude
      ),
      '_blank'
    )
  }

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) {}

  rsvpForm = this.formBuilder.group({
    name: '',
    email: '',
    rsvp: '',
    song: '',
    notes: '',
    time: null
  });

  onSubmit(): void {
    if (this.rsvpForm.valid) {
      this.rsvpForm.controls['time'].setValue(Date.now());
      // RSVPFormSheets.logEntry(this.rsvpForm.value)

      var url = ''.concat("https://docs.google.com/forms/d/e/",
          "1FAIpQLSeQwu3jUXU6zBj7v7QynN0Jth0qzev-mY4MZ4Tr7yXZy8xyEg", 
          "/formResponse?usp=pp_url&",
          "&entry.334478865=", this.rsvpForm.value.email,
          "&entry.399277818=", this.rsvpForm.value.name,
          "&entry.1902251507=", this.rsvpForm.value.rsvp,
          "&entry.133873191=", this.rsvpForm.value.song,
          "&entry.1104970691=", this.rsvpForm.value.notes,
          "&entry.1987519335=", this.rsvpForm.value.time,
          "&submit=Submit"
      );
      console.log(url)
      var response = this.http.get(url, {headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        'Accept': '*/*',
      }}).subscribe();

      this.snackBar.open('RSVP Sent!', 'OK', {duration: 5000});
    } else {
      this.snackBar.open('Incomplete RSVP', 'OK', {duration: 5000});
    }
  }

}
