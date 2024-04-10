import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { UserDatabase } from './adapters/db/UserDatabase'
import { RegisterUser } from './core/user/RegisterUser'
import { Criptography } from './adapters/auth/Criptography'
import RegisterUserController from './controllers/RegisterUserController'

const app = express()
app.use(express.json())

const userCollection = new UserDatabase()
const cripto = new Criptography()
const registerUser = new RegisterUser(userCollection, cripto)
new RegisterUserController(app, registerUser)

const port = process.env.PORT ?? 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}....`)
})