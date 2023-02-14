import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb' }));

app.get('/', async (reg,res) => {
    res.send('hello from Bom this is backend ');
})

const startServer = async () => {

    // It cannot fail so we use try and catch 

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server has started on port http://localhost:8080'))

    } catch (err) {
        console.log(err)
    }




}

startServer()