import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { UserDatabase } from './adapters/db/UserDatabase'
import { RegisterUser } from './core/user/RegisterUser'
import { Criptography } from './adapters/auth/Criptography'
import RegisterUserController from './controllers/RegisterUserController'
import { LoginUser } from './core/user/LoginUser'
import LoginUserController from './controllers/LoginUserController'
import { BcryptAdapter } from './adapters/auth/BcryptAdapter'

const app = express()
app.use(express.json())

const userCollection = new UserDatabase()
const cripto = new BcryptAdapter()

const registerUser = new RegisterUser(userCollection, cripto)
new RegisterUserController(app, registerUser)

const loginUser = new LoginUser(userCollection, cripto)
new LoginUserController(app, loginUser)

const port = process.env.PORT ?? 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}....`)
})