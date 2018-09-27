import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/routes';

class App {
  public app: express.Application;
  public routes: Routes = new Routes();

  constructor() {

    this.app = express();
    this.config();
    this.routes.routes(this.app);
  }

  private config(): void {
    //support application/json type post data
    this.app.use(bodyParser.json());

    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false}));

    //CORS
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });
  }
}

export default new App().app;
