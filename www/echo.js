/**
 * Cordova Echo Plugin
 * @author An Nguyen <annt@younetco.com>
 * @version 0.1.0
 */
(function(window) {
    'use strict';
    
    var exec = require('cordova/exec');

    module.exports = {
        echo: function(message, successCallback, errorCallback) {
            return exec(successCallback, errorCallback, 'Echo', 'echo', [message]);
        }
    }
}(this));