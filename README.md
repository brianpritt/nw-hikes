# Hike the Northwest

#### February 2, 2017

### By **Brian Pritt, Ryan Peterson and Steve Burton**

### Specifications
This is a project to create a better hiking application.


## Setup/Installation Requirements

To run the application:
* Clone this repository to your computer.
* Navigate to the project directory in the terminal.
* Use the commands $ npm install and $ bower init to download the packages necessary to run the application.
* Create a file to store an API key:

src/app/api-keys.ts <br>
The file should look like this, with your own Firebase credentials:  <br>
export var masterFirebaseConfig = { <br>
apiKey: "xxxx", <br>
authDomain: "xxxx.firebaseapp.com", <br>
databaseURL: "https://xxxx.firebaseio.com", <br>
storageBucket: "xxxx.appspot.com", <br>
messagingSenderId: "xxxx" <br>
};

* Now run the commands $ ng build then $ ng serve and navigate to http://localhost:4200 in your web browser to run the project on the local server.

## Known Bugs

None.

## Support and contact details

You can contact me on Github at brianpritt, ryanpeterson08, steve-burton.

## Technologies Used

JavaScript, Angular 2, OpenStreetMap OpenLayers, Firebase, Node, Bower HTML, CSS, Materialize

### License

GPL v3

Copyright (c) 2017 **_Brian Pritt, Ryan Peterson and Steve Burton_**
