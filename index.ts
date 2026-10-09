import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port: number = 3000;

// ------------------------------
// Express configuration
// ------------------------------

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

// ------------------------------
// Routing
// ------------------------------

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello World!');
});

// Sample page route
app.get('/sample', (req: Request, res: Response): void => {
  res.render('sample.ejs');
});

// ------------------------------
// Start server
// ------------------------------

app.listen(port, (): void => {
  console.log(`Server started: http://localhost:${port}`);
});