const express = require('express');
const initModels = require('./models/initModels');
const db = require('./utils/database');
const userRouter = require("./routers/users.routers");
const courseRouter = require("./routers/courses.routers");
const categoriesRouter = require("./routers/categories.routers");
const videosRouter = require("./routers/videos.routers");

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());


initModels();

db.authenticate()
    .then(() => console.log('Autenticasion exitosa'))
    .catch((error) => console.log(error));

db.sync({alter: true})
    .then(() => console.log('Sync exitosa'))
    .catch((error) => console.log(error));

app.get('/', (req, res)=> {
    res.status(200).json({message: 'Bienvenido al servidor'})
});


/////////////////////////////////
/////////////////////////////////
app.use('/api/v1', userRouter);
app.use('/api/v1', courseRouter);
app.use('/api/v1', categoriesRouter);
app.use('/api/v1', videosRouter);



app.listen(PORT, () => {
    console.log('SERVIDOR CORRIENDO EN PUERTO', PORT);
});
