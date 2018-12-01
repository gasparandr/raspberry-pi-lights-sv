

import { Router, Request, Response, NextFunction } from "express";
import * as passport from "passport";
import { Strategy } from "passport-local";
import axios from "axios";
import * as bcrypt from "bcrypt-nodejs"



class AuthenticationController {

    router: Router;



    constructor() {
        this.router = Router();
        this.routes();
    }



    public initialize() {
        passport.use( this.getStrategy() );

        passport.serializeUser( (user, done) => {
            console.log( `Inside serializeUser callback, User id is saved to the session file store here` );
            done( null, ( user as any ).id );
        });


        passport.deserializeUser((id, done) => {
            axios.get(`http://localhost:5000/users/${ id }`)
                .then(res => done( null, res.data ) )
                .catch(error => done( error, false ) );
        });


        return passport.initialize();
    }




    public routes() {
        this.router.post( "/login", this.login );
    }



    public login(req: Request, res: Response, next: NextFunction) {

        console.log( `Inside POST /login callback function` );

        console.log( `REQUEST` );
        console.log( req.body );


        passport.authenticate( "local", (err, user, info) => {
            if ( info ) return res.send( info.message );
            if ( err ) return next( err );
            if ( ! user ) return res.redirect( "/login" );

            ( req as any ).login(user, (err) => {
                if ( err ) return next( err );

                return res.redirect( "../../input" );
            })
        })( req, res, next );

    }


    private getStrategy(): Strategy {
        return new Strategy(
            { usernameField: "email" },
            ( email, password, done ) => {
                axios.get( `http://localhost:5000/users?email=${ email }` )
                    .then( res => {
                        const user = res.data[0];

                        if ( ! user ) {
                            return done( null, false, { message: "Invalid Credentials.\n" } );
                        }

                        if ( ! bcrypt.compareSync( password, user.password ) ) {
                            return done( null, false, { message: "Invalid Credentials.\n" } );
                        }

                        return done( null, user );

                    })
                    .catch( error => done( error ) );
            }
        )
    }

}


export default new AuthenticationController();