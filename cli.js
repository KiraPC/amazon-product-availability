const arg = require('arg');
const inquirer = require('inquirer');
const config = require('./config/index');

const messages = {
    username: 'Please insert the username of the amazon account',
    passowrd: 'Please insert the password for the amazon account',
    url: 'Please choose the url of the product',
};

function parseArgumentsIntoOptions(rawArgs) {
    const args = arg(
        {
            '--url': String,
            '--debug': Boolean,
            '--page-timeout': Number,
            '--refresh-interval': Number
        },
        {
            argv: rawArgs.slice(2),
        }
    );

    return {
        url: args['--url'],
        debug: args['--debug'] || false,
        timeout: args['--page-timeout'] || config.browserOption.pageToTrack.timeout,
        refreshInterval: args['--refresh-interval'] || config.browserOption.refreshInterval
    };
}

async function promptForMissingOptions(options) {
    const requiredOptions = ['url'];
    const questions = [];

    for (let i = 0; i < requiredOptions.length; i++) {
        const requiredOption = requiredOptions[i];
        
        if (!options[requiredOption]) {
            questions.push({
                type: 'input',
                name: requiredOption,
                message: messages[requiredOption]
            });
        }
    }

    const answers = await inquirer.prompt(questions);
    return {
        ...options,
        url: options.url || answers.url
    };
}

module.exports = async function cli(args) {
    let options = parseArgumentsIntoOptions(args);
    options = await promptForMissingOptions(options);

    config.browserOption.headless = !options.debug;
    config.loggingOptions.debug = options.debug;
    config.browserOption.pageToTrack.url = options.url;
    config.browserOption.pageToTrack.timeout = options.timeout;
    config.browserOption.refreshInterval = options.refreshInterval;

    console.log(config)

    require('./index')();
}
