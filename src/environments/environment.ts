// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const port = 4000;

export const environment = {
  production: false,
  rootPath : 'http://localhost:' + port + '/',
  statesPath : 'http://localhost:' + port + '/api/states',
  getJobsListPath : 'http://localhost:' + port + '/api/',
  editStatusPath : 'http://localhost:' + port + '/api/edit/',
  createNewJobPath : 'http://localhost:' + port + '/api/',
  orderBy : 'http://localhost:' + port + '/api/order',
  deleteJob : 'http://localhost:' + port + '/api/delete/',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
