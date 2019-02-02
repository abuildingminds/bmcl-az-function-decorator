import { authCheckDecorator } from './lib/auth';

export {
    getHello,
    authCheckDecorator
};

function getHello(params) {
    return 'Hello';
}
