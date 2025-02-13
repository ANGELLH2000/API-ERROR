import  express from 'express';
import { insertData } from './services.js';
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/', async (req, res) => {
    const body = req.body;
    console.log(body);
    await insertData(body);
    res.send("datos recibidos");
});  
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});