import { CryptoInterface } from "./CryptoInterface";

export class Criptography implements CryptoInterface {
    encrypt(password: string): string {
        return password.split('').reverse().join('')
    }
}