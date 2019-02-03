import JWT from 'jwt-decode';

export function authCheckDecorator(wrapped) {   
    return function () {
        const [ context, req, ...rest ] = arguments; 
        const { authorization } = req.headers;        
    
        const tokenDecoded  = JWT(authorization.split(' ')[1]);
        context.log(tokenDecoded);

        context.log(process.env['userRoles']);

        context.log('Started wrapping');
        const result = wrapped.apply(this, arguments);
        context.log('Ended wrapping');
    }
}