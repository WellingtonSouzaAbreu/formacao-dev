import bcrypt from 'bcrypt'
import { CryptoInterface } from '../../core/ports/CryptoInterface'

export class BcryptAdapter implements CryptoInterface {
    encrypt(password: string) {
        const salta = bcrypt.genSaltSync(10)
        console.log(bcrypt.hashSync(password, salta))
        return bcrypt.hashSync(password, salta)
    }

    isEqual(insertedPassword: string, passwordHash: string) {
        return bcrypt.compareSync(insertedPassword, passwordHash)
    }
}

