import { RegisterUser } from "../core/user/RegisterUser";
import { Express } from 'express'

export default class RegisterUserController {
    constructor(
        private server: Express,
        private registerUser: RegisterUser
    ) {
        server.post('/register', (req, res) => {
            registerUser.execute(
                req.body.name,
                req.body.email,
                req.body.password
            )
            return res.status(201).send()
        })
    }
}