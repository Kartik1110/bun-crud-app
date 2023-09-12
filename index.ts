import * as mongoose from "mongoose";
import { User } from "./schemas/schema";

// connect to database
await mongoose.connect("mongodb://localhost:27017/bun-crud");

/**
@description : Creates a new User
@return      : User Created
*/
const user = new User({
  email: "user1@gmail.com",
  password: "Test@123",
});
await user.save();

/**
@description : Returns all users
@return      : User list
*/
const users = await User.find();
console.log(users);

Bun.serve({
  port: 8080,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname !== "/") {
      throw new Error("Oops! Page not found.");
    }
    return new Response(`USERS FOUND: ${JSON.stringify(users)}`);
  },
});

// disconnect
// await mongoose.disconnect();
