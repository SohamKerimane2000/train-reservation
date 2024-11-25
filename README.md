Train Seat Reservation System-
This is a train seat reservation application built using Angular. It allows users to book seats in a train coach while following specific booking rules such as prioritizing seats in the same row and ensuring nearby seats are booked when necessary.

Features
Seat Booking Rules:

Users can book up to 7 seats at a time.
Seats are prioritized in the same row.
If seats are unavailable in one row, nearby seats are booked automatically.
Dynamic Seat Layout:

Displays an interactive seat layout with availability status.

Visual Indicators:

Shows booked and available seats with distinct colors/styles.
Real-Time Updates:

Updates the seat layout immediately after each booking.

Usage
Enter the number of seats to book in the input field.
Click the "Book Seats" button.
The application will display the seat numbers booked and update the seat layout.
Seat Booking Logic
The system prioritizes booking seats in a single row.
If no single row can accommodate the booking:
Nearby seats are booked to ensure proximity.