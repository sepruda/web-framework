import { User } from './models/User'

const user = new User({name: "Leo", age: 20})

user.on("click", () => {console.log("change 1")})
user.on("click", () => {console.log("change 2")})
user.on("hover", () => {console.log("change 3")})

user.trigger("hover")


