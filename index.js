import express from 'express';
import morgan from 'morgan';

import mongoose from 'mongoose';
import router from './router.js';

import dotenv from 'dotenv';
dotenv.config();

//connect db: admin:password; /nm db?
var uri = process.env.MONGODB_URI;

mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, () =>{
        console.log('Connection to db established.');
    }
);

const app = express();

app.use(express.json());
app.use(morgan('dev'));


//router
app.get('/', (req, res, next) =>{
    res.json({
        message: 'success',
    })
});

app.use('/api', router);

//listen to port
app.listen(process.env.PORT, ()=>{
    console.log('App listens to port 3000');
})