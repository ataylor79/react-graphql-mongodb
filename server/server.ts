import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import * as cors from 'cors'

// mongoDB Schemas
import * as Recipe from './models/Recipe'
import * as User from './models/User'

// GraphQL Express middleware
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const { resolvers } = require('./resolvers')
const { typeDefs } = require('./schema')

// // Create GraphQL Schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

dotenv.config({ path: './variables.env' })

// connect to DB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch(err => console.log('Error connecting to DB', err))

// Start app
const app = express()
const port = process.env.PORT || 4444

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}
app.use(cors(corsOptions))

// Create graphiql app
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({
        schema,
        context: {
            Recipe,
            User,
        },
    })
)

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
})
