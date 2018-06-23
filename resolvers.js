import mongoose from "mongoose";
import authorModel from "./components/models/author.js";
const resolvers = {
    Query: {
        authors: () => {
            return authors;
        },
        author: (root, { id }) => {           
            return authors.find(author => author.id === id)
        }
    },
    Mutation: {
        addAuthor: (root, { name, age, books}) => {
            const author = new authorModel({age, name, books});
            return author.save();
        }
    }
}

export default resolvers;