"use strict";

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */

const map: any = {
    'moment': 'vendor/moment/min/moment.min.js',
    'ng2-bootstrap': 'vendor/ng2-bootstrap'
}; 

/** User packages configuration. */
const packages: any = {
  'vendor/ng2-bootstrap': {
      defaultExtension: 'js'
  }
};



////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',
  'ng2-bootstrap',

  // App specific barrels.
  'app',
  'app/shared',
  'app/components/navbar',
  'app/components/login',
  'app/components/login-root',
  'app/components/dashboard-root',
  'app/components/test-modal',
  'app/components/home-root',
  'app/components/trend-detail-root',
  'app/components/drop-down-button',
  'app/components/stock-history',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
