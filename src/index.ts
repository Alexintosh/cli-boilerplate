// when esModuleInterop import * as prog from 'caporal'; will not work
// https://github.com/mattallty/Caporal.js/issues/171
import prog from 'caporal';

prog
    .version('1.0.0')
    // you specify arguments using .argument()
    // 'app' is required, 'env' is optional
    .command('ts', 'Basic CLI Typescript example')
    .argument('[arg]', 'argument desc', /^.*$/, 'default arg')
    .option('--option <option>', 'option desc', prog.STRING, 'default option')
    .action((args, options, logger) => {
        logger.info('Hello');
        logger.info(options);
        logger.info("%j", args);
    });


prog.parse(process.argv);