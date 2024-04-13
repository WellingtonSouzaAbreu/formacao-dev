import axios from 'axios'

import { User } from '../../src/core/user/User'
const baseUrl = process.env.API_URL

test('Deve registrar um novo usuário se não existir', async () => {
    const userData: User = {
        name: 'Alberto',
        email: 'xxx@gmail.com',
        password: '123456'
    }

    const resp = await axios.post(`${baseUrl}/register`, userData)

    expect(resp.status).toBe(201)
})

test('Deve gerar um erro ao tentar gerar um novo usuário', async () => {
    try {
        const userData: User = {
            name: 'Alberto',
            email: 'xxx@gmail.com',
            password: '123456'
        }

        await axios.post(`${baseUrl}/register`, userData)
        const resp = await axios.post(`${baseUrl}/register`, userData)

        expect(resp.status).toBe(201)
    } catch (error: any) {
        expect(error.response.status).toBe(400)
        expect(error.response.data).toBe('User already exists')
    }
})

test('Deve retornar um usuário ao passar a senha correta', async () => {
    try {
        const userData1: User = {
            name: 'Alberto',
            email: 'xxx@gmail.com',
            password: '123456'
        }

        const userData2: User = {
            name: 'Maria',
            email: 'yyy@gmail.com',
            password: '55555'
        }

        const loginData = {
            email: 'xxx@gmail.com',
            password: '123456'
        }

        const res = await axios.post(`${baseUrl}/login`, loginData)
        console.log(res.data)

        expect(res.status).toBe(200)
        expect(res.data.name).toBe('Alberto')
        expect(res.data.email).toBe('xxx@gmail.com')
    } catch (error: any) {
        expect(error.response.status).toBe(400)
        expect(error.response.data).toBe('Password is incorrect')
    }
})

