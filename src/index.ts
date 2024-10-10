import { log } from 'console';
import express,{Express,Request,Response} from 'express';
import { PORT } from './secrets';
import rootRouter from './routes';
import { PrismaClient } from '@prisma/client';
import { errorMiddleware } from './middelwares/errors';
import { signupSchema } from './schema/users';


const app:Express=express();
app.use(express.json())
app.get('/',(req:Request,res:Response)=>{
    res.send("working");
});

app.use('/api',rootRouter);
export const prismaClinet=new PrismaClient({
    log:["query"]
})
app.use(errorMiddleware);
app.listen(PORT,()=>{
    console.log("working on localhost:"+PORT);
    
}
);

