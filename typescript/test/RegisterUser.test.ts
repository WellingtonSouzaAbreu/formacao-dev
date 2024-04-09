import { RegisterUser } from '../src/RegisterUser'
test('Deve registrar usuário', () => {
    const useCase = new RegisterUser()

    const newUser = useCase.execute('João da Silva', 'jjj@gmail.com', '123456')

    expect(newUser.name).toBe('João da Silva')
    expect(newUser.email).toBe('jjj@gmail.com')
    expect(newUser.password).toBe('654321')
})