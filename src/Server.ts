


import AuthenticationController from "./controllers/AuthenticationController";

require( "dotenv" ).config();


import * as bodyParser from "body-parser";
import * as express from "express";
import * as cors from "cors";
import * as ejs from "ejs";
import * as passport from "passport";
import * as uuid from "uuid/v4";
import * as session from "express-session";



import HomeController from "./controllers/HomeController";
import InputController from "./controllers/InputController";


const FileStore = require( "session-file-store")( session );

const publicPath = __dirname.substr( 0, __dirname.indexOf( "build" ) ) + "public";


class Server {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.errors();
    }



    public config() {


        this.app.set( "view engine", "ejs" );

        this.app.use( "*/public", express.static( publicPath ) );


        this.app.use( bodyParser.urlencoded( { extended: true } ) );
        this.app.use( bodyParser.json() );
        this.app.use( cors() );

        this.app.use( session({
            genid: (req) => {
                return uuid(); // use UUIDs for session IDs
            },
            store: new FileStore(),
            secret: "keyboard cat",
            resave: false,
            saveUninitialized: true
        }));

        this.app.use( AuthenticationController.initialize() );
        this.app.use( passport.session() );

    }



    public routes() {

        this.app.use( '/', HomeController );
        this.app.use( "/input", InputController );
        this.app.use( "/auth", AuthenticationController.router );


    }



    public errors() {
        this.app.use( (err, req, res, next) => {
            res.status( 422 ).json( { success: false, message: err.message } );
        });
    }

}



export default new Server().app;