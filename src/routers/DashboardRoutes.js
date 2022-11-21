import { Redirect, Route, Switch } from 'react-router-dom'
import Store from '../components/Store';
import { NavbarUI } from '../components/ui/NavBar';
import {RegistrationForm} from '../components/register/registerScreen';
import NewSession from '../components/login/newSession';


export const DashboardRoutes = () => {


    return (
        <>
            <NavbarUI />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/store" component={Store} />
                    <Route exact path="/register" component={RegistrationForm}/>
                    <Route exact path="/iniciarSesion" component={NewSession}/>
                    <Redirect to="/store" />
                </Switch>
            </div>
        </>
    )
}