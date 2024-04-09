import { CryptoInterface } from "../../app/ports/CryptoInterface";

export class Criptography implements CryptoInterface {
    encrypt(password: string): string {
        return password.split('').reverse().join('')
    }

    isEqual(password: string, passwordHash: string): boolean {
        const insertedPassword = this.encrypt(password)
        return insertedPassword === passwordHash
    }
}