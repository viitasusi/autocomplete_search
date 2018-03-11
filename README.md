#Autocomplete_search

A full react application containing autocomplete_search component. The component can be used to search locations using Google Places API. 

###To run the application:
- clone this repo
- create yourself a Google API key
- create a .env file to the root folder of this project. 
- create there an env variable named REACT_APP_GOOGLE_PLACES_KEY
- start your application by typing "npm start"
- enjoy

###How the solution works
Every time the user types something to the input box, the onChange-event listener detects the change and causes a GET call to Google Places API. Once the response comes, the autocomplete predictions will be updated. The predictions are accessible both with mouse and keyboard arrow keys and selecting one of them will cause the input box to update.

The code itself is hopefully self-explaining and there is no need to describe the functions on more detailed level than this. 

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
