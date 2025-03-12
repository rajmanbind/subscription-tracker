import express from 'express';
import cookieParser from 'cookie-parser';


import { PORT} from './config/env.js';

import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscriptions.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import arcjetMiddleware from './middlewares/arcjet.middleware.js';
import workFlowRouter from './routes/workflow.routes.js';

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(arcjetMiddleware);


app.use('/api/v1/auth',authRouter)
app.use('/api/v1/users',userRouter)
app.use('/api/v1/subscriptions',subscriptionRouter)
app.use('/api/v1/workflows',workFlowRouter)


app.use(errorMiddleware)

app.get("/",(req,res)=>{
    res.send({body:"Welcome to the subscription Tracker App"})
})


app.listen(PORT,async()=>{
    console.log(`Server is runing on http://localhost:${PORT}`)
    await connectToDatabase();
})