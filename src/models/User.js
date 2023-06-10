import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, unique: true, required: true  },
  email: { type: String, unique: true, required: true  },
  password: { type: String, unique: true, required: true },
  avatar: { type: String },
  isBlocked: { type: Boolean },
  isAdmin: { type: Boolean }
}, { timestamps: true });



mongoose.models = {}

export default mongoose.model("User", userSchema);