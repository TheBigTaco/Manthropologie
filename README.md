# Manthropologie

## Set-Up

- Clone this project to your desktop.
- Obtain your own firebase API Key from https://console.firebase.google.com . While you won't be able to view our products, you can see the basic structure of our website.
- Create a document called "api-keys.ts" in the "app" folder (Manthropologie/src/app/api-keys.ts). Add your API Key to this document in the following format:
  export var masterFirebaseConfig = {
      apiKey: "XXXXXX",
      authDomain: "XXXX",
      databaseURL: "XXXX",
      storageBucket: "XXXXX",
    };

  (format is located in app.module.ts for reference, if needed)
- Run $npm install
- Run $ng serve to launch the application. Open a web browser window and navigate to: http://localhost:4200 (** NG Live Development Server is running on http://localhost:4200 ** )


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
