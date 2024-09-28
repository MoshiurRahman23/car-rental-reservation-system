import validator from "validator";
import { z } from "zod";

// Zod Schema
const userValidationSchema = z.object({
    id: z.string(),
    name: z.object({
        firstName: z.string()
            .nonempty('First Name is required')
            .refine(
                (value) => value.charAt(0).toUpperCase() + value.slice(1) === value,
                { message: "First name must be capitalized" }
            ),
        middleName: z.string().nonempty('Middle Name is required'),
        lastName: z.string()
            .nonempty('Last Name is required')
            .refine(validator.isAlpha, { message: 'Last name must only contain alphabetic characters' }),
    }),
    email: z.string()
        .nonempty('Email Address is required')
        .email('Invalid email address'),
    role: z.enum(["user", "admin"], { errorMap: () => ({ message: 'Role must be either user or admin' }) }),
    password: z.string()
        .nonempty('Password is required')
        .max(10, 'Password must be within 10 characters'),
    phone: z.string().nonempty('Phone Number is required'),
    address: z.string().nonempty('Address is required'),
});

export default userValidationSchema;
