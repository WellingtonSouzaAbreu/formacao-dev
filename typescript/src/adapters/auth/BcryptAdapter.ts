import bcrypt from 'bcrypt'
import { CryptoInterface } from '../../app/ports/CryptoInterface'

export class BcryptAdapter implements CryptoInterface {
    encrypt(password: string) {
        const salta = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salta)
    }

    isEqual(insertedPassword: string, passwordHash: string) {
        return bcrypt.compareSync(insertedPassword, passwordHash)
    }
}

