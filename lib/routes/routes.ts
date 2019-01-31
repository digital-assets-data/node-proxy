import { Request, Response } from 'express';
import * as request from 'request';

export class Routes {

  constructor() {}

  public routes(app): void {

    app.route('/proxy/:url')
    .get((req: Request, res: Response) => {
      const url: string = decodeURIComponent(req.params.url);
      console.log(url);
      const options = {
        url: url
      };
      request(options, (error, response, body) => {
        let parseError = false;
        let resp;
        try {
          resp = JSON.parse(body);
        } catch (e) {
          console.log(body);
          parseError = true;
        }
        if (!parseError) {
          res.send(resp);
        } else {
          res.send(body);
        }
      });
    });

    app.route('/post/:url')
    .post((req: Request, res: Response) => {
      const url: string = decodeURIComponent(req.params.url);
      console.log(url);
      const options = {
        url: url,
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(req.body)
      };
      request(options, (error, response, body) => {
        let parseError = false;
        let resp;
        if (error) {
          console.log('*** error!');
          console.log(error);
        }
        try {
          resp = JSON.parse(body);
        } catch (e) {
          console.log(body);
          parseError = true;
        }
        if (!parseError) {
          console.log(body);
          res.json(resp);
        } else {
          res.send(body);
        }
      });
    });
  }
}
