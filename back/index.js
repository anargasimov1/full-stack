const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const router = require('./src/router/UserRouter');
const blogRouter = require('./src/router/BlogRouter');

const url = process.env.URL;
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors({
    origin: "*"
}));

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use('/api', router);
app.use('/api', blogRouter)



app.listen(PORT, () => console.log(`server is started in ${PORT} port`));

mongoose.connect(url).then(() => console.log('connected db'));