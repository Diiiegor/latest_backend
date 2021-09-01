import {UnAuthorizedToken, IUnAuthorizedToken} from './UnAuthorizedTokenModel';

export class AuthorizationRepository {

    async saveUnAuthorizedToken(token: IUnAuthorizedToken) {
        const newToken = await UnAuthorizedToken.create(token)
        return newToken
    }

}