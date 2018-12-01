
import { Router, Request, Response, NextFunction } from "express";



class InputController {

    router: Router;



    constructor() {
        this.router = Router();
        this.routes();
    }



    public routes() {
        this.router.get( '/', this.input );
        this.router.post( "/data", this.data );
    }



    public input(req: Request, res: Response, next: NextFunction) {

        if ( ( req as any ).isAuthenticated() ) {
            res.render( "input" );
        } else {
            res.redirect( '/' );
        }

    }



    public data(req: Request, res: Response, next: NextFunction) {

        console.log( "Data arrived" );
        console.log( req.body );

        res.send( req.body );

    }

}


export default new InputController().router;