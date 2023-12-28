import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    fullname: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    avatar: {
        type: String,
        require: true
    },
    coverImage: {
        type: String,
    },
    projects: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    },
    blogs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    },
    qualifications: [
        {
            name: String,
            institution: String,
            year: String
        }
    ],
    skills: [
        {
            name: String,
            proficiency: String
        }
    ]
})

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();
})
export const User = mongoose.model("User", userSchema)