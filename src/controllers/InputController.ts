
import { Router, Request, Response, NextFunction } from "express";



class InputController {

    router: Router;



    constructor() {
        this.router = Router();
        this.routes();
    }



    public routes() {
        this.router.post( "/data", this.data );
    }



    public data(req: Request, res: Response, next: NextFunction) {

        console.log( "Data arrived" );
        console.log( req.body );

        res.send( req.body );

    }

}


export default new InputController().router;