import { request } from "express"

import register from '../controllers/registerUser.controller'

const userRoutes= (app) =>{
    app.post('user/register',register)
}