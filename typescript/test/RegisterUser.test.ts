import { Collection } from '../src/Collection'
import { Criptography } from '../src/Criptography'
import { CryptoInterface } from '../src/CryptoInterface'
import { Database } from '../src/Database'
import { RegisterUser } from '../src/RegisterUser'
import { PasswordWithSpace } from '../src/PasswordWithSpace'
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