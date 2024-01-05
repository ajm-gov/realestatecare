# Real Estate Care Estate Management Application

Real Estate Care is a fictional company as part of a final assignment for my Front End Development. This application is a mobile application, and mimics a mobile app that is used to maintain inspections for a Real Estate Company. It has a couple of key functionality pieces:

1) Authentication: since this is a prototype, it only has authentication in the visual sense where you can login to access content. Authentication in this app is not safe or secured in anyway and for demo purposes only.
2) Overview of completed jobs: You can access completed jobs based on an API response from a JSON file under db.json, utilizing my-json-server.typicode to mimic API functionality
3) Execute scheduled jobs: ability to execute an inspection job based on 1 of 4 job types: Damage, Maintenance, Modification or Inspection. Overview of jobs that are scheduled and ability to execute them. 
4) Knowledge base: prototype of what a knowledgebase would look like
5) Settings section: prototype of what a settings overview would look like

## Libraries/Frameworks used

This application is based on Vue, Ionic (https://ionicframework.com/), TypeScript and Capacitor (https://capacitorjs.com/). Application is deployed to Vercel, and can be accessed under https://realestatecare.vercel.app/auth/login. 

## Installing the project

Once you've cloned this repo, cd into the correct folder (`cd realestatecare` in your terminal), and then run the install command using `npm install` in your terminal. This will build out all dependencies in the untracked node_modules folder. 

### Setting up your .env file

Next step is to set-up your .env file, which will contain all of your environment variables. Currently the project uses 1 environment variable: 

VITE_JSON_DB_BASE_URL

This is the variable used to set a base URL for the my-json-server.typicode. By default, this should be set to "https://my-json-server.typicode.com/ajm-gov/realestatecare". This will automatically pick-up on the db.json file into the root of your project. 

### Running a local instance

In order to run your application locally, we are using `ionic serve`. This will run the application on http://localhost:8100, where you can access your local instance. 

### Authenticating 

When starting the application, you will be faced with a login screen. This authentication is super basic, it checks for a user in db.json and see if the password matches. If you want to log in to the application, you can login with one of the following credentials sets:

rob.bradford@realestatecare.nl
lookthisisapassword123
146589

suze.allington@realestatecare.nl
lookthisisapassword123
232342

## Unfinished Parts

If using this project, the following should be kept into consideration.

### Authentication
Please keep in mind that the implemented authentication is NOT PRODUCTION READY. This is purely for demonstration purposes. The authentication process checks for the existing users in db.json, and see if the password, email, and authentication code matches. 2 Factor Authentication is not dynamic and just a pre-set numeric code. Any API responses regarding logging in are exposed in the console as well as in the network requests. 

### Executing Scheduled Jobs
The form submissions are not actual form submissions. It mimics a form submission but the form is not posted to any database or service, and once again is just for demonstration purposes. Form submissions will not alter the db.json in anyway and does not have any purpose besides giving a demonstration of what the eventual end product would look/act like. 

### Settings
The settings are just for demonstration purposes for the User Interface, and do not take any affect to the application at this point 

### Knowledge Base
Knowledge Base has some sample content and all Knowledge Base Article Cards lead to 1 Knowledge Base Article that is used as a demonstration. Future state would be integrated with a headless Content Management System so that Knowledge Base Articles could be managed there. 