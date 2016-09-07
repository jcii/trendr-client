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
    'ng2-bootstrap': 'vendor/ng2-bootstrap', 
    'ng2-charts': 'vendor/ng2-charts',
    'angular2-fontawesome': 'vendor/angular2-fontawesome',
    'angular2-jwt': 'vendor/angular2-jwt',
    'angular2-ui-switch': 'vendor/angular2-ui-switch'
}; 

/** User packages configuration. */
const packages: any = {
  'vendor/ng2-bootstrap': { defaultExtension: 'js' },  
  'ng2-charts': { defaultExtension: 'js', main: 'ng2-charts.js' },
  'chartjs': { defaultExtension: 'js', format: 'cjs' },
  'angular2-fontawesome':{ defaultExtension: 'js' },
  'angular2-jwt': { main: 'angular2-jwt.js' },
  'angular2-ui-switch': { defaultExtension: 'js' }
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
  'ng2-charts',
  'angular2-fontawesome',

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
  'app/components/test-chart',
  'app/bar-chart',
  'app/radar-chart',
  'app/components/realtime-stock-chart',
  'app/register',
  'app/components/gen-line-chart',
  'app/components/gen-bar-chart',
  'app/sidebar',
  'app/home-page',
  'app/components/hichart',
  'app/components/profile',
  'app/components/trend',
  'app/components/trends',
  'app/components/slider',
  'app/components/carousel',
  'app/components/carousel-container',
  'app/components/slide',
  'app/components/dash-home',
  'app/components/mytrends',
  'app/components/new-trend',
  'app/components/crud-modal',
  'app/components/og-modal',
  'app/components/trafic-light',
  'app/components/traffic-light',
  'app/components/word-sum-barchart',
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
  packages: cliSystemConfigPackages,
  paths: {
        "ng2-charts/ng2-charts": "node_modules/ng2-charts/ng2-charts",
    }
});

// Apply the user's configuration.
System.config({ map, packages });
