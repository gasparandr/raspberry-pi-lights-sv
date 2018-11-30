

import { Router, Request, Response, NextFunction } from "express";
import * as mongoose from "mongoose";

import User from "../models/User";




class DataHelper {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }


    public populate(req: Request, res: Response, next: NextFunction) {

        const szilveszter: any = new User({
            username: "szilveszterr",
            password: "123123"
        });

        szilveszter.save()
            .then( user => res.send( { success: true, message: "Szilveszter has been created." } ) )
            .catch( next );
    }



    public drop(req: Request, res: Response, next: NextFunction) {
        console.info("Collections drop has been initiated" );

        const { users } = mongoose.connection.collections;

        if ( ! users )        res.send( "Users collection not found" );

        users.drop( () => {
            res.send( "Collections dropped" );
        });
    }



    public routes() {
        this.router.get( "/populate", this.populate );
        this.router.get( "/drop", this.drop );
    }
}



export default new DataHelper().router;
