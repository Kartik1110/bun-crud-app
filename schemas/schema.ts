import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {type: String, required: true},
    password: {type: String, required: true},
  },
);

export type User = mongoose.InferSchemaType<typeof userSchema>;
export const User = mongoose.model('Users', userSchema);
