import { useState } from "react";
import Error from "../../commons/error/Error";
import "./Private.css";

const Private = () => {
    const [usernameState, setUsernameState] = useState('')
    const [passwordState, setPasswordState] = useState('')
    const [errorState, setErrorState] = useState(false)

    const handleUsernameState = (evt) => {
        setUsernameState(evt.target.value)
    }

    const handlePasswordState = (evt) => {
        setPasswordState(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setErrorState(false)

        fetch('https://randomuser.me/api/?results=20&seed=brazil&nat=br')
            .then((response) => response.json())
            .then(({ results }) => {
                const user = results.find(({ login }) => {
                    return login.username === usernameState && login.password === passwordState;
                });

                if (user) {
                    alert ('user found')
                } else {
                    setErrorState(true)
                }
            })
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h1>Login</h1>

            {errorState ? <Error mensagemErro="User not found." /> : ''}

            <div className="row">
                <div className="col-12">
                    <label>Username</label>
                    <input onChange={handleUsernameState} name="username" type="text" value={usernameState} />
                </div>

                <div className="col-12">
                    <label>Password</label>
                    <input onChange={handlePasswordState} name="password" type="password" value={passwordState} />
                </div>

                <div className="col-12">
                    <button type="submit">Submit</button>
                </div>


            </div>

        </form>
    );
};

export default Private;