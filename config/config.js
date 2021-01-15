const config = {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/animals',
    mongoOptions: {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        autoIndex: true,
        poolSize: 10,
        bufferMaxEntries: 0,
        connectTimeoutMS: 10000,
        socketTimeoutMS: 30000,
    }
}

module.exports = config;
