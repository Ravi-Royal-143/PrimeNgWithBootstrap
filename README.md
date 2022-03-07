# Basic

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Reference: https://medium.com/@christof.thalmann/convert-angular-project-to-android-apk-in-10-steps-c49e2fddd29
## Reference: https://www.youtube.com/watch?v=f3-T02cpsNc


--- using the convertor --- 

create a simple angular app 

## add globally cordova

npm install -g cordova


## Create a new Cordova project at the some location

cordova create hello-app-world-cordova com.example.hello OurFirstApp


## move inside the cordova pjt project

cd ...(pjt name)
## add android inside the cordova project

cordova platform add android

## Now merge the just created Cordova project into our Angular project. Copy every folder and file of the Cordova project expect the package.json, the package-lock.json and the node_modules folder into the Angular project root.


## Merge the Cordova package.json into the Angular package.json. You don’t need to copy the scripts object from the Cordova package.json. Overwrite the Angular package.json name with the Cordova package.json name. Everything else should be easy mergeable. 

## other change

<base href=”./”>

## Go to the tsconfig.json and make sure in compilerOptions the target is set to es5! Angular versions ≥ 8 will have compile target set to es2015 (ES6) by default but Android Emulators do have problems with ES6. So set target to es5 (ES5)

"target": "es5",

## On default Angular creates a /dist folder when building your project while Cordova builds its APK into the /www folder. We need to have one unite target path. Go to the angular.json and change the outputPath to “www”.

"outputPath": "www",


## after this 

ng build --prod --aot
cordova build android

## to run in emulator 

cordova emulate android

## to create a file

cordova build --release android or cordova build android

## to create apk go to andriod studio and point the project to the path platforms/android

in the top bar there will be the way to build the project in the apk format