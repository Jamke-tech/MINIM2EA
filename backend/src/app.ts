import express from 'express';
import cors from 'cors'
import morgan from 'morgan';


const app = express();

import indexRoutes from './routes/index'

//POSEM TOTS ELS SETTINGS DE LA APP


//settings
app.set('port', process.env.PORT || 5500); // definim el port del nostre servidor

// Middlewares que volem utilitzar pel nostre backend

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//Routes de la API
app.use('/api',indexRoutes); //Les rutes començaran per api i continuaran com posa en indexRoutes





export default app;