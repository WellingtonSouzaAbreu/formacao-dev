import { CryptoInterface } from "../ports/CryptoInterface"
import { UserCollection } from "../ports/UserCollection"
import { User } from "./User"

export class RegisterUser {
    constructor(
        private database: UserCollection,
        private cryptography: CryptoInterface
    ) { }

    async execute(name: string, email: string, password: string): Promise<User> {
        const passwordHash = this.cryptography.encrypt(password)

        const userExists = await this.database.findByEmail(email)
        console.log(userExists)
        if (userExists) throw new Error('User already exists')

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