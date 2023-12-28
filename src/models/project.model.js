import mongoose from "mongoose";
const projectSchema = mongoose.Schema({
    projectname: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
    },
    languagesUsed: [{
        language: {
            type: String,
            required: true
        },
        percentage: {
            type: Number,
            min: 0,
            max: 100,
            required: true
        }
    }
    ],
    repositoryURL: {
        type: String,
        required: true,
        unique: true
    }
});
export const Project = mongoose.model("Project", projectSchema);