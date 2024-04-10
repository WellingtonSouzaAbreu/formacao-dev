import { User } from "../user/Usuario";

export interface UserCollection {
    insert(user: User): Promise<void>
    findByEmail(email: string): Promise<User | null>
}