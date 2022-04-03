import SegfaultHandler from 'segfault-handler';

export * from './launchpads/MK2/LaunchpadMK2.js';
export * from './launchpads/MK3/LaunchpadMK3.js';
export * from './launchpads/base/BaseLaunchpad.js';
export * from './launchpads/autoDetect';
export * as colors from './colorHelpers.js';
export * as utils from './utils.js';

// Midi uses native code, so just in case
SegfaultHandler.registerHandler('launchpad-js-crash.log');
