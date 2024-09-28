import { Schema, model } from "mongoose";
import { TUser, UserMethods, UserModel, } from "./user.interface";
import validator from 'validator';

const userSchema = new Schema<TUser, UserMethods, UserModel>({
    id: { type: String },
    name: {
        firstName: {
            type: String,
            required: [true, 'First Name is required'],
            trim: true,
            validate: {
                validator: function (value: string) {
                    const firstName = value.charAt(0).toUpperCase() + value.slice(1);
                    return firstName === value;
                },
                message: "{VALUE} is not a capitalize format "
            }
        },
        middleName: {
            type: String,
            required: [true, 'Middle Name is required'],
            trim: true
        },
        lastName: {
            type: String,
            required: [true, 'Last Name is required'],
            trim: true,
            validate: {
                validator: (value: string) => validator.isAlpha(value),
                message: '{VALUE} is not Valid',
            }
        },
    },
    email: {
        type: String,
        required: [true, 'Email Address is required'],
        unique: true,
        trim: true,
        validate: {
            validator: (value: string) => validator.isEmail(value),
            message: '{VALUE} is not a valid Email Type',
        }
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        required: [true, 'Must be Like user|admin'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        maxlength: [10, 'Password should be within 10 char'],
        unique: true,
        trim: true
    },
    phone: {
        type: String,
        required: [true, 'Phone Number is required'],
        trim: true
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
        trim: true
    },
});

userSchema.methods.isUserExists = async function (id: string) {
    const existingUser = await User.findOne({ id });
    return existingUser;
}

export const User = model<TUser, UserModel>("User", userSchema);
