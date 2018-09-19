const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const SCREENSHOT_PATH = ('reports/screenshots/');

require('nightwatch-cucumber')({
    cucumberArgs: [
        '--require', 'step_definitions',
        '--format', 'node_modules/cucumber-pretty',
        '--format', 'json:reports/cucumber.json',
        'features']
});

module.exports = {
    output_folder: 'reports',
    custom_assertions_path: '',
    live_output: false,
    disable_colors: false,
    page_objects_path: 'page_objects',
    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        log_path: '',
        host: '127.0.0.1',
        port: 4444
    },
    test_settings: {
        default: {
            selenium_port: 4444,
            selenium_host: '127.0.0.1',
            screenshots: {
                enabled: true,
                path: SCREENSHOT_PATH,
                on_failure: true,
                on_error: true
            },
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true
            }
        },
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true
            },
            screenshots: {
                enabled: true,
                path: SCREENSHOT_PATH,
                on_failure: true,
                on_error: true
            },
            selenium: {
                cli_args: {
                    'webdriver.chrome.driver': chromedriver.path
                }
            }
        }
    }
};
