const resolvers = {
    Query: {
        authors: () => {
            return authors;
        },
        author: (root, { id }) => {           
            return authors.find(author => author.id === id)
        }
    }
}

export default resolvers;