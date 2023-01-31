import { useContext } from 'react';
import { Route, Redirect} from 'react-router-dom';
import { AuthContext } from '../contexts/auth';

export default function RouteWrapper({
    component: Component,
    isPtivate,
    ...rest
}){
    const { signed, loading } = useContext(AuthContext);


    if(loading){
        return(
            <div></div>
        )
    }

    if(!signed && isPtivate){
        return <Redirect to="/" />
    }

    if(signed && !isPtivate){
        return <Redirect to="/dashboard" />
    }

    return(
        <Route 
            {...rest}
            render={ props => 
                (<Component {...props} />
            )}
        />
    )
}