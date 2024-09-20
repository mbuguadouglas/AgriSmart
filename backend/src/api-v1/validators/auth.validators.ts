import Joi from 'joi'

export const registerSchema = Joi.object ({
    name : Joi.string().min(3).max(20).required().messages({
        'string.base' : 'Username should be of type text',
        'string.empty' : 'Username cannot be blank',
        'string.min' : 'Username should not be below {#limit} characters',
        'string.max' : 'Username cannot exceed {#limit} characters',
        'any.required' : 'A username is required',
    }),
    email : Joi.string().email().required().messages({
        'string.base' : 'Email should be of type text',
        'string.empty' : 'Email is required',
        'string.email' : 'Please enter a valid email address',
        'any.required' : 'Email is required',
    }),
    password : Joi.string().min(6).max(12).required().pattern(
        new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,10}$')
    ).messages({
        'string.base' : 'Password should be of type text',
        'string.empty' : 'Password is required',
        'string.min' : 'Password should have a minimum length of {#limit} characters',
        'string.max' : 'Password should have a maximum length of {#limit} characters',
        'any.required' : 'Password is required',
        'string.pattern.base': 'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character',
    }),
    // role : Joi.string().required().messages({
    //     'string.base' : 'Role should be of type text',
    //     'string.empty' : 'Role is required',
    //     'any.required' : 'Role is required',
    // }),
    role : Joi.string().required().valid('farmer', 'buyer').messages({
        'string.base' : 'Role should be of type text',
        'string.empty' : 'Role is required',
        'any.required' : 'Role is required',
        'string.valid' : 'weka choices ziko umbwa'
    }),
})