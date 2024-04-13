import { CryptoInterface } from "../ports/CryptoInterface"
import { UserCollection } from "../ports/UserCollection"
import { User } from "./User"

export class LoginUser {
    constructor(
        private database: UserCollection,
        private cryptography: CryptoInterface
    ) { }

    async execute(email: string, password: string): Promise<User> {
        const userExists = await this.database.findByEmail(email)
        if (!userExists?.password) throw new Error('User already exists')

        const passwordIsEqual = this.cryptography.isEqual(password, userExists.password)
        if (!passwordIsEqual) throw new Error('Password is incorrect')

        return userExists
    }
}