import { UserCollection } from "../../app/ports/UserCollection"
import { User } from "../../app/user/Usuario"

export class UserDatabase implements UserCollection {
    private static itens: User[] = []

    async insert(item: User): Promise<void> {
        UserDatabase.itens.push(item)
    }
}