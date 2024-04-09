import { CryptoInterface } from "../ports/CryptoInterface"
import { UserCollection } from "../ports/UserCollection"
import { User } from "./Usuario"

export class RegisterUser {
    constructor(
        private database: UserCollection,
        private cryptography: CryptoInterface
    ) { }

    execute(name: string, email: string, password: string) {

        const passwordHash = this.cryptography.encrypt(password)

        const user: User = {
            id: `${Math.random()}`, // Adicionar novo ID
            name,
            email,
            password: passwordHash
        }

        this.database.insert(user)
        return user
    }
}