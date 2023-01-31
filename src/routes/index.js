import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import ApiWeather from "../pages/ApiWeather";
import ApiMovies from "../pages/ApiMovies";


export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/register" component={SignUp} />

            <Route exact path="/dashboard" component={Dashboard} isPtivate/>
            <Route exact path="/ApiWeather" component={ApiWeather} isPtivate/>
            <Route exact path="/ApiMovies" component={ApiMovies} isPtivate/>
            
        </Switch>
    )
} 