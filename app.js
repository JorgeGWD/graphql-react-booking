const express = require('express')
const bodyParser = require('body-parser')
const expressGraphQL = require('express-graphql').graphqlHTTP
const  { buildSchema } = require('graphql')

const app = express()

app.use(bodyParser.json())

app.use('/graphql', expressGraphQL({
    schema: buildSchema(`
        type RootQuery {
            events: [String!]!
        }
        type RootMutation {
            createEvent(name: String): String
        }
        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
        events: () => {
            return ['Coding all night']
        },
        createEvent: (args) => {
            const eventName = args.eventName
            return eventName
        }
    },
    graphiql: true
}))

app.listen(3000)