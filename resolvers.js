import mongoose from "mongoose";
import authorModel from "./components/models/author.js";
const resolvers = {
    Query: {
        authors: () => {
            return authorModel.find()           
        },
        author: (root, { id }) => {           
            return authorModel.findOne({id})                    
        },
     
    },
    Mutation: {
        addAuthor: (root, { name, age, books}) => {
            const author = new authorModel({age, name, books});
            return author.save();
        },
        deleteAuthor: (root, { id }) => {
            authorModel.findOneAndRemove({id})
        }
    }
}

export default resolvers;