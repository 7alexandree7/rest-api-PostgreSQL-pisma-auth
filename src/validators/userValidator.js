import {z} from "zod"

const registerSchema = z.object({
    name: z.string("Name must be at least 2 characters").min(2).max(60),
    email: z.email(),
    password: z.string("Password must be at least 4 characters").min(4),
})

const loginSchema = z.object({
    email: z.email(),
    password: z.string("Password must be at least 4 characters").min(4),
})


export {
    registerSchema,
    loginSchema,
}