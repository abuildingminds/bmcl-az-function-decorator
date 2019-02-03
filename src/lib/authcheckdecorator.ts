import * as JWT from 'jwt-decode';

export const authCheckDecorator = (wrapped: any): any => function(...args: Array<any>): void {
    const req  = args[1];
    const { authorization } = req.headers;

    const tokenDecoded: any = JWT(authorization.split(' ')[1]);

    if (authorisationFailure(tokenDecoded.userRoles)) {
        throw new Error('User is not authorized to execute this function !!');
    }

    wrapped.apply(undefined, arguments);
};

function authorisationFailure(userRoles: string): boolean {
    if (!userRoles) {
        return true;
    }

    return false;
}
