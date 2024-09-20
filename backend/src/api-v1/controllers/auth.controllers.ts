import {Request, Response } from 'express'
import { v4 as uid} from 'uuid'
import bcrypt from 'bcrypt'

import { UserRoles } from '../models/auth.models'
import { registerSchema } from '../validators/auth.validators'
import { DbHelper } from '../databaseHelpers'


const db = new DbHelper()

export async function registerUser(request:Request, response:Response) {
    const id = uid()
    const {name, email, password, role} = request.body

    const { error } = registerSchema.validate( request.body)

    try {
        if (error) {
            // return response.status(400).send(error.details)
            return response.status(400).send(error.details[0].message)
        } else {
            const hashedPassword = await bcrypt.hash(password, 9)

            await db.exec('addUser', {
                id : id,
                name : name,
                email : email,
                password : hashedPassword,
                role : role
            })

            return response.status(200).send({message:'Congratulations! You have successfully created a new account'})
        }

    } catch (error) {
        return response.status(400).send(error)
    }
}