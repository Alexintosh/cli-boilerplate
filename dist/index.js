"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// when esModuleInterop import * as prog from 'caporal'; will not work
// https://github.com/mattallty/Caporal.js/issues/171
var caporal_1 = __importDefault(require("caporal"));
caporal_1.default
    .version('1.0.0')
    // you specify arguments using .argument()
    // 'app' is required, 'env' is optional
    .command('ts', 'Basic CLI Typescript example')
    .argument('[arg]', 'argument desc', /^.*$/, 'default arg')
    .option('--option <option>', 'option desc', caporal_1.default.STRING, 'default option')
    .action(function (args, options, logger) {
    logger.info('Hello');
    logger.info(options);
    logger.info("%j", args);
});
caporal_1.default.parse(process.argv);
