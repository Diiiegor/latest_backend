import passport from "passport";
import passportJwt from "passport-jwt";
import {User} from "../api/components/users/UserModel";


//Adicionamos metodo de autenticacion JWT a passport

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}, function (jwtToken, done) {
    User.findOne({email: jwtToken.email}, function (err, user) {
        if (err) {
            return done(err, false)
        }
        if (user) {
            return done(undefined, user, jwtToken);
        } else {
            return done(undefined, false);
        }

    })
}))