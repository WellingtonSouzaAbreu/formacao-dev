export class Criptography {
    encrypt(password: string): string {
        return password.split('').reverse().join('')
    }
}