import * as JWT from 'jwt-decode';

export const authCheckDecorator = (wrapped: any): any => function(...args: Array<any>): void {
    const [context, req] = args;
    const { authorization } = req.headers;

    const tokenDecoded = JWT(authorization.split(' ')[1]);
    context.log(tokenDecoded);

    context.log(process.env['userRoles']);

    context.log('Started wrapping');
    wrapped.apply(undefined, arguments);
    context.log('Ended wrapping');
};
