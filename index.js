'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.authCheckDecorator = exports.getHello = undefined;

var _auth = require('./lib/auth');

exports.getHello = getHello;
exports.authCheckDecorator = _auth.authCheckDecorator;


function getHello(params) {
    return 'Hello';
}