console.log("hi there");
import { User } from './models/User'

const user = new User({name: "Leo", age: 20})

user.set({ age: 98})

console.log(user.get("name"),
user.get("age"))


