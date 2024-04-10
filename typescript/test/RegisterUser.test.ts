import { Criptography } from '../src/adapters/auth/Criptography'
import { CryptoInterface } from '../src/core/ports/CryptoInterface'
import { UserDatabase } from '../src/adapters/db/UserDatabase'
import { RegisterUser } from '../src/core/user/RegisterUser'
import { PasswordWithSpace } from '../src/adapters/auth/PasswordWithSpace'
import { BcryptAdapter } from '../src/adapters/auth/BcryptAdapter'
import { UserCollection } from '../src/core/ports/UserCollection'
test('Deve registrar usuário invertendo a senha', async () => {
    const database: UserCollection = new UserDatabase()
    const cryptography: CryptoInterface = new Criptography()

    const useCase = new RegisterUser(database, cryptography)

    const newUser = await useCase.execute('João da Silva', 'jjj@gmail.com', '123456')

    expect(newUser.name).toBe('João da Silva')
    expect(newUser.email).toBe('jjj@gmail.com')
    expect(newUser.password).toBe('654321')
    expect(typeof newUser.id).toBe('string')
})

test('Deve registrar usuário com senha com espaços', async () => {
    const database: UserCollection = new UserDatabase()
    const cryptography: CryptoInterface = new PasswordWithSpace()

    const useCase = new RegisterUser(database, cryptography)

    const newUser = await useCase.execute('João da Silva', 'jjj@gmail.com', '123456')

    expect(newUser.name).toBe('João da Silva')
    expect(newUser.email).toBe('jjj@gmail.com')
    expect(newUser.password).toBe('1 2 3 4 5 6')
    expect(typeof newUser.id).toBe('string')
})

test('Deve registrar usuário com senha criptografaca', async () => {
    const database: UserCollection = new UserDatabase()
    const cryptography: CryptoInterface = new BcryptAdapter()

    const useCase = new RegisterUser(database, cryptography)

    const newUser = await useCase.execute('João da Silva', 'jjj@gmail.com', '123456')

    expect(newUser.name).toBe('João da Silva')
    expect(newUser.email).toBe('jjj@gmail.com')
    expect(cryptography.isEqual('123456', newUser.password!)).toBeTruthy()
    expect(typeof newUser.id).toBe('string')
})

test('Deve lançar erro ao cadastrar usuários com mesmo email', async () => {
    const database: UserCollection = new UserDatabase()
    const cryptography: CryptoInterface = new BcryptAdapter()

    const useCase = new RegisterUser(database, cryptography)

    const name = 'João da Silva'
    const email = 'jjj@gmail.com'
    const password = '123456'

    await useCase.execute(name, email, password)
    const exec = async () => await useCase.execute(name, email, password)

    expect(exec).rejects.toThrow(Error)
})