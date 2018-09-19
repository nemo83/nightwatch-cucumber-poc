## Intro
This is a simple demo for running tests using Cucumber and Nightwatch. 

## Setup & Run
Make sure you have all dependencies installed with `npm install`.
You can then run tests with `npm test`.

## Report
A report showing passed and failed tests is generated when you run "npm run report" after the tests. The location of this report is defined in the options var in create-html-report.js

## Screenshots
Screenshots are configured to be taken when a step fails. This is configurable in test_settings in nightwatch.conf.js file. These screenshots are then embedded into
the test report (see above) via hooks.js. If all tests pass, then no screenshots are taken and therefore no screenshots appear in the report.
