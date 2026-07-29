import express, { urlencoded } from 'express';
import cors from 'cors';
import pool from "./DBconfig/DBconfig.js";


import espaciosRoutes from './routes/espaciosRoutes.js';
import reservasRoutes from './routes/reservasRoutes.js';

/*
import categoriaRoutes from './routes/categoriaRoutes.js';
*/
const app = express();

//MIDDLEWARES
app.use(cors({ origin: "localhost:5173"}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//USING THE ROUTES
app.use('/api/espacios', espaciosRoutes);
app.use('/api/reservas', reservasRoutes);
/*
app.use('/api/categoria', categoriaRoutes);
*/

app.get('/api/test-db', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users LIMIT 3');
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


export default app;






