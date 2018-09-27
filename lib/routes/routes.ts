import { Request, Response } from 'express';
import * as request from 'request';

export class Routes {

  constructor() {}

  public routes(app): void {
    // Nodes: get last logged performance results for each node
    app.route('/proxy/:url')
    .get((req: Request, res: Response) => {
      const url: string = decodeURIComponent(req.params.url);
      console.log(url);
      const options = {
        url: url
      };
      request(options, (error, response, body) => {
        let parseError = false;
        let res;
        try {
          res = JSON.parse(body);
        } catch (e) {
          console.log(body);
          parseError = true;
        }
        if (!parseError) {
          res.send(res);
        } else {
          res.send(body);
        }
      });
    });
  }
}
