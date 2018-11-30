

import { Router, Request, Response, NextFunction } from "express";



class HomeController {

    router: Router;



    constructor() {
        this.router = Router();
        this.routes();
    }



    public routes() {
        this.router.post( "/login", this.login );
    }



    public login(req: Request, res: Response, next: NextFunction) {

        console.log( "System User: " + process.env.SYSTEM_USER );
        console.log( "System Password: " + process.env.SYSTEM_PASSWORD );
        console.log( "================================" );
        console.log( "Sent User: " + req.body.username );
        console.log( "Sent Password: " + req.body.password );

    }

}


export default new HomeController().router;