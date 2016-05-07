`ng new PROJECT_NAME` <-- not sure if coincidence, but I had a lot of problems until I made the name all caps... got a weird TypeError about not finding sourceDir (had to do with the angular-cli.json and angular-cli-build.js files not being fully done?  Could've been global dependencies or something too

`cd PROJECT_NAME`

`npm install firebase angularfire2 --save`

`typings install firebase --save --ambient`

(probably do a commit here)

(optional) `ng serve`

Make firebase.ts file

Make Auth files

    mkdir src/app/auth

    ng g service auth/auth

Resources:

This was helpfile in adding 3rd party libs: https://github.com/dougludlow/ng2-bs3-modal/issues/31