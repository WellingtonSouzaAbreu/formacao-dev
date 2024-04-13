import { UserCollection } from "../../core/ports/UserCollection"
import { User } from "../../core/user/User"

export class UserDatabase implements UserCollection {
    private itens: User[] = [
        {
            name: 'Alberto',
            email: 'xxx@gmail.com',
            password: '$2b$10$5IZxk48u/2TvQznuaW4BJ.4ufKDDf4vTy6prdy9nxrP.Y5LuDFyTu'
        },
        {
            name: 'Maria',
            email: 'yyy@gmail.com',
            password: '$2b$10$d3Vd1y6DOsxfC/IpVW7.5Of5GA6ynbqEORBIjaA3jGsYluVq3jMNC'
        }
    ]

    async insert(item: User): Promise<void> {
        this.itens.push(item)
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = this.itens.find(
            user => user.email === email
        )

        console.log(user)
        return user || null
    }
}