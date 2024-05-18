import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const userShcema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    token: {
      type: String,
    },
  },
  { versionKey: false }
);
userShcema.methods.hashPassword = async function() {
    this.password = await bcrypt.hash(this.password, 10);
}

userShcema.methods.checkPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}


export default model("user", userShcema);
