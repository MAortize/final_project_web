import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const handleLogin=()=>{
        // history.push('/'); //conserva el historial y puedo devolverme en cualquier momento con el back
        // 

        // const lastPath=localStorage.getItem('lastPaht') || '/';
        // dispatch({
        //     type:types.login,
        //     payload:{
        //         name:'Sergio'
        //     }
        // })
        //history.replace(lastPath); //borra el historial y no de permite hacer el backtip en la pagina 
    }
    return (
 /*        <div className="container mt-5">
            <h1>Login </h1>
            <hr/>
            <button
            className="btn btn-primary"
            onClick={handleLogin}
            >
                Login
            </button>
        </div> */
    <div className="container text-center mt-3 p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        <form className="text-center">
            <div className="">
            <h3 className="text-center">Iniciar Sesión </h3>
            <div className="form-group mt-3 ">
                <label>Correo Electrónico</label>
                <input
                type="email"
                className="form-control mt-1"
                placeholder="ejemplo@hotmail.com"
                />
            </div>
            <div className="form-group mt-3">
                <label>Contraseña</label>
                <input
                type="password"
                className="form-control mt-1"
                placeholder="**************"
                />
            </div>
            <div className="d-grid gap-2 mt-3">
                <button
                    className="btn btn-primary"
                    onClick={handleLogin}
                    >
                        Iniciar Sesión
                </button>
            </div>
            <p className="forgot-password text-right mt-2">
                ¿Olvidó <a href="#">contraseña?</a>
            </p>
            </div>
        </form>
    </div>

    )
}

export default LoginScreen