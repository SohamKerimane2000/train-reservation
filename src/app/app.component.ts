import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  seatsToBook: number = 0; 
  seatLayout: any[][] = []; 
  bookingMessage: string = ''; 
  constructor() {
    this.initializeSeats();
  }

  initializeSeats() {
    const totalSeats = 80; 
    const seats = [];

    for (let i = 1; i <= totalSeats; i++) {
      seats.push({ number: i, status: 'available' });
    }

    seats[0].status = 'booked';
    seats[5].status = 'booked';

    this.seatLayout = [];
    for (let i = 0; i < 12; i++) {
      if (i < 11) {
        this.seatLayout.push(seats.slice(i * 7, i * 7 + 7));
      } else {
        this.seatLayout.push(seats.slice(i * 7, i * 7 + 3));
      }
    }
  }

  reserveSeats() {
    if (this.seatsToBook < 1 || this.seatsToBook > 7) {
      this.bookingMessage = 'Please book between 1 and 7 seats.';
      return;
    }

    let seatsBooked = 0;
    const bookedSeats = [];

    for (let row of this.seatLayout) {
      for (let seat of row) {
        if (seat.status === 'available' && seatsBooked < this.seatsToBook) {
          seat.status = 'booked';
          bookedSeats.push(seat.number);
          seatsBooked++;
        }
      }
      if (seatsBooked === this.seatsToBook) break;
    }

    if (seatsBooked === this.seatsToBook) {
      this.bookingMessage = `Seats booked successfully: ${bookedSeats.join(', ')}`;
    } else {
      this.bookingMessage = 'Not enough seats available.';
    }
  }
}
