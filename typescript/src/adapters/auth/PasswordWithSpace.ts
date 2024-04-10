import { CryptoInterface } from "../../core/ports/CryptoInterface";

export class PasswordWithSpace implements CryptoInterface {
    encrypt(password: string): string {
        return password.split('').join(' ')
    }

    isEqual(password: string, passwordHash: string): boolean {
        const insertedPassword = this.encrypt(password)
        return insertedPassword === passwordHash
    }
}