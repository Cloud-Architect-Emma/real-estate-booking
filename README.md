# Real Estate Booking App

A full-stack web application for booking property viewings and inquiries. Built with React on the frontend and AWS Lambda + DynamoDB on the backend, this app allows users to submit booking requests that are securely stored in the cloud.

## Screenshots

### Homepage

![Homepage](.real-estate-booking/homepage.PNG) 

### Success Message

![Success](.real-estate-booking/success.png)

## Features

- Responsive booking form with real-time feedback
- API integration via AWS API Gateway
- Serverless backend using Python Lambda functions
- Data storage in DynamoDB
- Clean UI ready for styling and expansion

## Tech Stack

- **Frontend**: React (JavaScript)
- **Backend**: AWS Lambda (Python)
- **Database**: DynamoDB
- **API Gateway**: RESTful endpoint for booking submissions

## Installation

```bash
git clone https://github.com/Cloud-Architect-Emma/real-estate-booking.git
cd real-estate-booking
npm install
npm start
Booking API
Submit booking requests to:

Code
POST https://bgcknjgz48.execute-api.us-east-1.amazonaws.com/prod/bookings
Request body:

json
{
  "name": "Emmanuela",
  "email": "emma@example.com",
  "propertyId": "2",
  "message": "Friday afternoon"
}

Local Development
React app runs on localhost:3000

Booking form sends data to the live API Gateway endpoint

Responses are displayed in real-time

Future Improvements
Add email confirmations via AWS SES

Admin dashboard to view bookings

Property search and filtering

Authentication for agents

License
This project is licensed under the MIT License.
```
