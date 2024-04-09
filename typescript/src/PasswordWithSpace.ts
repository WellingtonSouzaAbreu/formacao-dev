import { CryptoInterface } from "./CryptoInterface";

export class PasswordWithSpace implements CryptoInterface {
    encrypt(password: string): string {
        return password.split('').join(' ')
    }
}