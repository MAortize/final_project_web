import React from 'react';


export const NewSession = ({history}) => {

    const handleLogin=()=>{
        const email = document.getElementById('email');
        console.log(email);
        console.log('falta');
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
    <div className="container text-center mt-3 p-3 w-50 d-flex flex-column" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        <form className="text-center" onClick={handleLogin}>
            <div className="">
            <h3 className="text-center">Iniciar Sesión </h3>
            <div className="form-group mt-3 ">
                <label>Correo Electrónico</label>
                <input
                id="email"
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
                    id='btnSend'
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

export default NewSession