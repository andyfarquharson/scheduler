# Interview Scheduler
This is a single page app that allows students to book, edit, and cancel interview appointments.  This app was built with React and relies on an API server combined with a local PostgreSQL database.  Interviewer Scheduler also comes with a suite of tests courtesy of Jest and Cypress.

## Sneak Peak

![interview_scheduler_full_screen.png](/screenshots/interview_scheduler_full_screen.png)
<b>Selecting a day from the list on the left will give the user a view of all the appointments and open slots on that day</b>

![interview_scheduler_appointment.png](/screenshots/interview_scheduler_appointment.png?raw=true)
<b>Each individual appointment slot has a button to edit and delete in the bottom right corner, as well as all of the pertinent information to the appointment.</b>

![interview_scheduler_edit_form.png](/screenshots/interview_scheduler_edit_form.png?raw=true)
<b>The edit form allows us to put in a different name as well as change who our interviewer is.</b>

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
