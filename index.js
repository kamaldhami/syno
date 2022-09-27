const express = require('express')

const app = express()
require('./mongodb');
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '1mb' }));
require('dotenv').config()

app.listen(process.env.PORT,
    async () => {
        console.log('Server is up and running on port:'+process.env.PORT)
    }
)