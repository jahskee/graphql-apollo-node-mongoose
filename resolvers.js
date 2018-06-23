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
            return authorModel.findOneAndRemove({id})
        },
        updateAuthor: (root, {id, name}) => {
            return authorModel.findOneAndUpdate({id}, {name})
        }
    }
}

export default resolvers;
/*
mutation {
  addAuthor(name: "Jaizon", age: 39, books:["React Experts"])
}

mutation {
  updateAuthor(id:"ca6d7200-771c-11e8-87d9-27785d83f20b",name:"Jaizon Lubaton"){
    name
  }
}
mutation {
  deleteAuthor(id: "0c66c480-770a-11e8-ba78-814d480f1a61") {
    name
  }
}
*/
