import { UserCollection } from "../../core/ports/UserCollection"
import { User } from "../../core/user/Usuario"

export class UserDatabase implements UserCollection {
    private itens: User[] = []

    async insert(item: User): Promise<void> {
        this.itens.push(item)
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = this.itens.find(
            user => user.email === email
        )

        return user || null
    }
}