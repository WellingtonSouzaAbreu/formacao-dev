export interface CryptoInterface { // Contrato para o Database
    encrypt(item: string): string
    isEqual(password: string, passwordHash: string): boolean
}