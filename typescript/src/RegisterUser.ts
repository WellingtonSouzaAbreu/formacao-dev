import { Criptography } from "./Criptography"
import { Database } from "./Database"

export class RegisterUser {
    database = new Database()
    criptography = new Criptography()

    execute(name: string, email: string, password: string) {

        const passwordHash = this.criptography.encrypt(password)

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