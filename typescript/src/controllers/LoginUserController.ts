import { LoginUser } from "../core/user/LoginUser";
import { RegisterUser } from "../core/user/RegisterUser";
import { Express } from 'express'

export default class LoginUserController {
    constructor(
        private server: Express,
        private loginUser: LoginUser
    ) {
        server.post('/login', async (req, res) => {
            try {
                const user = await loginUser.execute(
                    req.body.email,
                    req.body.password
                )
                return res.status(200).send(user)
            } catch (error: any) {
                console.log(error)
                res.status(400).send(error.message)
            }
        })
    }
}