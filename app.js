import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

//middlewares
app.use(morgan("tiny"));

//routes
app.get("/", (req, res) => {
    res.send("home");
});

app.get("/users", (req, res) => {
    res.send("users");
});

//db
//*traigo la url por el env, y el segundo parámetro lo tengo en el connect mismo del cluster! sin esos parametros tira warning
mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("conectado a mongo Atlas")
);

//server
app.listen(PORT, () =>
    console.log(`Server running on http://www.localhost:${PORT}`)
);
