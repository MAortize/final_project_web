import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function RegistrationForm() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phoneNumber, setPhonoNumber] = useState(null);
    const [address, setAddress] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "phoneNumber") {
            setPhonoNumber(value);
        }
        if (id === "address") {
            setAddress(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }

    }

    const handleSubmit = () => {
        console.log(firstName, lastName, email, phoneNumber, password, confirmPassword);
    }

    return (
        <div className="form text-center mt-2 d-flex flex-column mb-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <h1>Formulario de Registro</h1>
            <hr />
            <div className="form-body">
                <div className="username">
                    <label className="form__label my-1" for="firstName">Nombres:</label>
                    <br />
                    <input className="form__input rounded-3 border-0 p-2 shadow-sm" type="text" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName" placeholder="Daniel" />
                </div>
                <div className="lastname my-3">
                    <label className="form__label my-1" for="lastName">Apellidos:</label>
                    <br />
                    <input type="text" name="" id="lastName" value={lastName} className="form__input p-2 rounded-3 border-0 shadow-sm" onChange={(e) => handleInputChange(e)} placeholder="Cuevas" />
                </div>
                <div className="email my-3">
                    <label className="form__label my-1" for="email">Email:</label>
                    <br />
                    <input type="email" id="email" className="form__input rounded-3 border-0 p-2 shadow-sm" value={email} onChange={(e) => handleInputChange(e)} placeholder="correo@hotmail.com" />
                </div>
                <div className="phoneNumber my-3">
                    <label className="form__label my-1" for="phoneNumber">Telefono:</label>
                    <br />
                    <input type="text" id="phoneNumber" className="form__input rounded-3 border-0 p-2 shadow-sm" value={phoneNumber} onChange={(e) => handleInputChange(e)} placeholder="777-777-777" />
                </div>
                <div className="address my-3">
                    <label className="form__label my-1" for="address">Dirección:</label>
                    <br />
                    <input type="text" id="address" className="form__input rounded-3 border-0 p-2 shadow-sm" value={address} onChange={(e) => handleInputChange(e)} placeholder="Kra 20 #56-52" />
                </div>

                <div className="password my-3">
                    <label className="form__label my-1" for="password">Contraseña:</label>
                    <br />
                    <input className="form__input rounded-3 border-0 p-2 shadow-sm" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="***********" />
                </div>
                <div className="confirm-password my-3">
                    <label className="form__label my-1" for="confirmPassword">Confirmar Contraseña:</label>
                    <br />
                    <input className="form__input rounded-3 border-0 p-2 shadow-sm" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="***********" />
                </div>
            </div>
            <div class="w-100">
                <button onClick={() => handleSubmit()} type="submit" class="btn text-light bg-success p-2">Registrarme</button>
            </div>
        </div>

    )
}

export default RegistrationForm;