import { Collection } from '../src/app/ports/Collection'
import { Criptography } from '../src/adapters/auth/Criptography'
import { CryptoInterface } from '../src/app/ports/CryptoInterface'
import { Database } from '../src/adapters/db/Database'
import { RegisterUser } from '../src/app/user/RegisterUser'
import { PasswordWithSpace } from '../src/adapters/auth/PasswordWithSpace'
import { BcryptAdapter } from '../src/adapters/auth/BcryptAdapter'
test('Deve registrar usuário invertendo a senha', () => {
    const database: Collection = new Database()
    const cryptography: CryptoInterface = new Criptography()

    const useCase = new RegisterUser(database, cryptography)

    const newUser = useCase.execute('João da Silva', 'jjj@gmail.com', '123456')

    expect(newUser.name).toBe('João da Silva')
    expect(newUser.email).toBe('jjj@gmail.com')
    expect(newUser.password).toBe('654321')
    expect(typeof newUser.id).toBe('number')
})

test('Deve registrar usuário com senha com espaços', () => {
    const database: Collection = new Database()
    const cryptography: CryptoInterface = new PasswordWithSpace()

    const useCase = new RegisterUser(database, cryptography)

    const newUser = useCase.execute('João da Silva', 'jjj@gmail.com', '123456')

    expect(newUser.name).toBe('João da Silva')
    expect(newUser.email).toBe('jjj@gmail.com')
    expect(newUser.password).toBe('1 2 3 4 5 6')
    expect(typeof newUser.id).toBe('number')
})

test('Deve registrar usuário com senha criptografaca', () => {
    const database: Collection = new Database()
    const cryptography: CryptoInterface = new BcryptAdapter()

    const useCase = new RegisterUser(database, cryptography)

    const newUser = useCase.execute('João da Silva', 'jjj@gmail.com', '123456')

    expect(newUser.name).toBe('João da Silva')
    expect(newUser.email).toBe('jjj@gmail.com')
    expect(cryptography.isEqual('123456', newUser.password)).toBeTruthy()
    expect(typeof newUser.id).toBe('number')
})