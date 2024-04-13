import { User } from "../user/User";

export interface UserCollection {
    insert(user: User): Promise<void>
    findByEmail(email: string): Promise<User | null>
}