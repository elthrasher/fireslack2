`ng new fireslack2` <-- not sure if coincidence, but I had a lot of problems until I made the name all caps... got a weird TypeError about not finding sourceDir (had to do with the angular-cli.json and angular-cli-build.js files not being fully done?  Could've been global dependencies or something too

`cd fireslack2`

`npm install firebase angularfire2 ng2-bootstrap --save`

`typings install firebase --save --ambient`

(probably do a commit here)

Add Bootstrap 4 to `index.html`

    <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css">

Add angularfire2 and firebase to `angular-cli-build.js`

    'ng2-bootstrap/**/*.js',
    'firebase/lib/*.js',
    'angularfire2/**/*.js',

Add mappings to `system-config.ts`

    const map: any = {
        firebase: 'vendor/firebase/lib/firebase-web.js',
        angularfire2: 'vendor/angularfire2',
        'ng2-bootstrap': 'vendor/ng2-bootstrap/ng2-bootstrap.js'
    };

    /** User packages configuration. */
    const packages: any = {
        angularfire2: {
            defaultExtension: 'js',
            main: 'angularfire2.js'
        },
        'vendor/ng2-bootstrap': {
        defaultExtension: 'js',           
        }
    };

(optional to verify) `ng serve`

Make `src/app/firebase.ts` file

    import {
        AuthMethods,
        defaultFirebase,
        FIREBASE_PROVIDERS,
        firebaseAuthConfig
    } from 'angularfire2';


    export const FIREBASE_APP_PROVIDERS: any[] = [
        FIREBASE_PROVIDERS,
        defaultFirebase('https://burning-fire-2308.firebaseio.com'),
        firebaseAuthConfig({
            method: AuthMethods.Popup
        })
    ];


Make Auth files

    ng g service shared/auth
    ng g service shared/route-helper
    ng g service shared/

Resources:

This was helpfile in adding 3rd party libs: https://github.com/dougludlow/ng2-bs3-modal/issues/31