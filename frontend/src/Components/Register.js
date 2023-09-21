import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api__url } from "./Values"

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [responseLogin, setResponseLogin] = useState("");


     function register(e) {
        e.preventDefault()
        const endpoint = `${api__url}register`;
        const input = { email: email, password: password, username:username, fullname:fullname}
        fetch(endpoint, {
            method: "POST",
            body: JSON.stringify(input),
            headers: {
                'Content-Type': 'application/json'
            }

        })
            .then(response => response.json())
            .then(data => setResponseLogin(data.message))
            .catch(error => {
                console.error("Error fetching:", error);
            });

    }

 

    return (
        <div
            className="d-flex align-items-center py-4 justify-content-center p-auto body"
            cz-shortcut-listen="true"
            data-new-gr-c-s-check-loaded="14.1123.0"
            data-gr-ext-installed=""
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
                <symbol id="check2" viewBox="0 0 16 16">
                    <path
                        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                    ></path>
                </symbol>
                <symbol id="circle-half" viewBox="0 0 16 16">
                    <path
                        d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
                    ></path>
                </symbol>
                <symbol id="moon-stars-fill" viewBox="0 0 16 16">
                    <path
                        d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
                    ></path>
                    <path
                        d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
                    ></path>
                </symbol>
                <symbol id="sun-fill" viewBox="0 0 16 16">
                    <path
                        d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                    ></path>
                </symbol>
            </svg>


            <main className="form-signin w-100 m-auto">
                <form className='mt-5' >
                    <h1 className="h3 mb-3 fw-normal">Register User</h1>


                    <div className="form-floating">
                        <input
                            type="username"
                            className="form-control"
                            id="username"
                            name="username"
                            placeholder="name@example.com"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label for="email">Username</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="fullname"
                            className="form-control"
                            id="fullname"
                            name="fullname"
                            placeholder="name@example.com"
                            onChange={(e) => setFullname(e.target.value)}
                        />
                        <label for="email">Full Name</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="name@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label for="email">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label for="password">Password</label>
                    </div>

                    {/* {% with messages = get_flashed_messages()  %}
        {% if messages %}
        {% for message in messages %}
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          {{ message }}
        </div>
        {% endfor %}
        {% endif %}
        {% endwith %} */}
                    {responseLogin ? <div className="alert alert-warning alert-dismissible fade show" value={ responseLogin } id='alert-dismissible__loginpage' role="alert" >{responseLogin}</div> : (<></>) }
                    <button className="btn btn-primary w-100 py-2" onClick={(e) => register(e)}>Register</button>
                    <Link className="btn btn-outline-warning w-100 mt-2 " to="/login">Signin</Link>
                </form>
            </main>

            <div id="crx-root-main"></div>
        </div>
    )
}

export default Register
