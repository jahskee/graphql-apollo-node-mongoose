const authors = [{
    id: 1,
    name: 'JK Rowling',
    age: 50,
    books: ["Horry Potter and the Goblet of Fire", "Harry Potter and the Prisoner of Azkaban"]
},
{
    id: 2,
    name: 'George RR Martin',
    age: 70,
    books: ["GOT - Song of Ice and Fire", "GOT - A Dance with Dragons"]
},
{
    id: 3,
    name: 'Stephen King',
    age: 60,
    books: ["The Green Mile", "Carrie"]
}
]

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