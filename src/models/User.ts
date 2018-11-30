
import { Schema, model, Model } from "mongoose";
import { IUser } from "./interfaces/IUser";


const UserSchema = new Schema({

    username: {
        type: String,
        required: true,
        validate: {
            validator: (username) => username.length > 1 && username.length <= 30,
            message: "Username has to to be at least two characters in length, but not longer than 30."
        }
    },

    password: {
        type: String,
        required: true,
        validate: {
            validator: (password) => password.length > 4 && password.length < 75,
            message: "Password must contain 4 or more characters."
        }
    },


});


const User: Model<IUser> = model<IUser>( "User", UserSchema );

export default User;