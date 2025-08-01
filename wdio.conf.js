export const config = {
    user: 'oauth-*******836', //Necessário configurar
    key: '68*******af14f',//Necessário configurar
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',

    specs: [
        './test/specs/**/*.js'
    ],

    maxInstances: 1,

    capabilities: [
        {
            platformName: 'Android',
            'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
            'appium:deviceName': 'Samsung Galaxy Tab S9 Plus GoogleAPI Emulator',
            'appium:platformVersion': '15.0',
            'appium:automationName': 'UiAutomator2',
            'appium:disableIdLocatorAutocompletion': true,
            'sauce:options': {
                appiumVersion: '2.11.0',
                build: 'appium-build-teste-eduferr.qa',
                name: 'Ebac Shop Teste',
                deviceOrientation: 'PORTRAIT',
            },
        }
    ],


    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',    
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
	    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        await driver.takeScreenshot();
    }
}
