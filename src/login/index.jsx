import Productos from "../dashboard/Productos/index";
import React, { useState } from "react";
import "./styles.scss";

const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
            username: "admin",
            password: "admin"
        },
        {
            username: "iker",
            password: "123"
        }
    ];

    const errors = {
        uname: "Usuario NO encontrado",
        pass: "Contraseña incorrecta"
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        var { uname, pass } = document.forms[0];
        const userData = database.find((user) => user.username === uname.value);

        if (userData) {
            if (userData.password !== pass.value) {
                setErrorMessages({ name: "123", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }

        if (userData.username === "admin") {
            window.location.href = "/dashboard";
        } else {
            setIsSubmitted(true);
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <>
            <div className="title">Bienvenidos!</div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="input-container form__group">
                        <label htmlFor="uname" className="form__label">Username or Email </label>
                        <input type="text" name="uname" required className="form__field" />
                        {renderErrorMessage("uname")}
                    </div>
                    <div className="input-container form__group">
                        <label htmlFor="pass" className="form__label">Password </label>
                        <input type="password" name="pass" id="pass" required className="form__field" />
                        {renderErrorMessage("pass")}
                    </div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </>
    );

    return (
        <div className="app">
            <div className="login-form">
                {isSubmitted ? <> <Productos /> </> : renderForm}
            </div>
        </div>
    );
}

export default Login;