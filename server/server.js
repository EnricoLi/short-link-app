import express from 'express';
import mongoose from 'mongoose';
import routes from "./routes/urls.routes.js"
import cors from "cors"


const app = express();

const PORT = process.env.PORT || 4000;

const DB = process.env.DB;

app.use(cors({
  origin: '*',
  methods: ['GET','POST']
}));

app.use(express.json())

app.use("/", routes)

mongoose
  .connect(
    `${DB}`
    )
  .then(() => {
    app.listen(`${PORT}`)
  })
  .catch((err) => console.log(err));
