import { Collection } from "../ports/Collection"
import { CryptoInterface } from "../ports/CryptoInterface"

export class RegisterUser {
    constructor(
        private database: Collection,
        private cryptography: CryptoInterface
    ) { }

    execute(name: string, email: string, password: string) {

        const passwordHash = this.cryptography.encrypt(password)

        const user = {
            id: Math.random(), // Adicionar novo ID
            name,
            email,
            password: passwordHash
        }

        this.database.insert(user)
        return user
    }
}