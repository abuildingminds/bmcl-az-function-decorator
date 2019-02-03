'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.authCheckDecorator = authCheckDecorator;

var _jwtDecode = require('jwt-decode');

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function authCheckDecorator(wrapped) {
    return function () {
        var _arguments = Array.prototype.slice.call(arguments),
            context = _arguments[0],
            req = _arguments[1],
            rest = _arguments.slice(2);

        var authorization = req.headers.authorization;


        var tokenDecoded = (0, _jwtDecode2.default)(authorization.split(' ')[1]);
        context.log(tokenDecoded);

        context.log(process.env['userRoles']);

        context.log('Started wrapping');
        var result = wrapped.apply(this, arguments);
        context.log('Ended wrapping');
    };
}