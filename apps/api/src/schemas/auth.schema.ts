import z, { email } from "zod";
import { ParseStatus } from "zod/v3";

export const signupSchema = z.object({
    email : z.email().trim(),
    password : z.string().min(6).trim(),
    name : z.string().trim(),
})

export const signinSchema = z.object({
    email : z.email().trim(),
    password : z.string().min(6).trim()
})