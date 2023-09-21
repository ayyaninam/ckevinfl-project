import React, { useEffect, useState } from 'react'
import Header from './Header'
import { api__url } from './Values';
const Users = () => {
    const [usersalldata, setUsersalldata] = useState([]);
    const [currentlyEditing, setCurrentlyEditing] = useState(0);
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

            document.getElementById('email').value = ""
            document.getElementById('fullname').value = ""
            document.getElementById('username').value = ""
            document.getElementById('password').value = ""
    }

    async function getallUsers() {
        let url = `${api__url}get_all_users`;
        let data = await fetch(url);
        let parsed_data = await data.json();
        setUsersalldata(parsed_data)
    }

    async function deleteUserCall(e) {
        e.preventDefault()
        let id = e.target.value
        let url = `${api__url}deleteuser/${id}`;
        let data = await fetch(url);
        let parsed_data = await data.json();
        console.log(parsed_data)
        document.getElementById(`${id}__path`).style.display = "none";
    }

    async function editUserCall(e) {
        e.preventDefault()
        let id = e.target.value
        setCurrentlyEditing(parseInt(id))
        let url = `${api__url}edituser/${id}`;
        let data = await fetch(url);
        let parsed_data = await data.json();
        document.getElementById('editing_email').value = parsed_data.email
        document.getElementById('editing_fullName').value = parsed_data.fullName
        document.getElementById('editing_username').value = parsed_data.username

    }
    async function edit_btn_clicked(e) {
        e.preventDefault()
        let id = currentlyEditing
        const endpoint = `${api__url}edituser/${id}`;
        let email = document.getElementById('editing_email').value
        let fullname = document.getElementById('editing_fullName').value
        let username = document.getElementById('editing_username').value
        let password = document.getElementById('editing_password').value

        const input = { email: email, fullname: fullname, username: username, password: password }
        fetch(endpoint, {
            method: "POST",
            body: JSON.stringify(input),
            headers: {
                'Content-Type': 'application/json'
            }

        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => {
                console.error("Error fetching:", error);
            });


        document.getElementById('editing_email').value = ""
        document.getElementById('editing_fullName').value = ""
        document.getElementById('editing_username').value = ""
        document.getElementById('editing_password').value = ""
        window.location.reload()





    }

    useEffect(() => {
        getallUsers()
    }, []);
    useEffect(() => {
        getallUsers()
    }, [responseLogin]);

    return (
        <>
            <Header />

            <div className="add_user_modals container w-50 mt-5 d-flex justify-content-center align-center">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalofAddUser">
                    Add NEW User
                </button>

                <div class="modal fade" id="modalofAddUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Add User</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            <div className="form-floating">
                        <input
                            type="username"
                            className="form-control mt-2"
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
                            className="form-control mt-2"
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
                            className="form-control mt-2"
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
                            className="form-control mt-2"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label for="password">Password</label>
                    </div>
                            </div>

                            {responseLogin ? <div className="alert alert-warning alert-dismissible fade show" value={ responseLogin } id='alert-dismissible__loginpage' role="alert" >{responseLogin}</div> : (<></>) }
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" id='modaladdusercloser' data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={(e) => register(e)}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="edit__area_foruser">
                <div className=" container w-50 mt-5 d-flex">
                    <div class="mb-3 w-25 mx-3">
                        <label for="editing_email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="editing_email" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3 w-25 mx-3">
                        <label for="editing_fullName" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="editing_fullName" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3 w-25 mx-3">
                        <label for="editing_username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="editing_username" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3 w-25 mx-3">
                        <label for="editing_password" class="form-label">New Password</label>
                        <input type="text" class="form-control" id="editing_password" placeholder="name@example.com" />
                    </div>

                </div>
                <button className='btn btn-info m-auto d-flex justify-content-center' onClick={(e) => edit_btn_clicked(e)}>Edit</button>
            </div>

            <div>
                <table class="table container w-50 mt-5">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {usersalldata ? usersalldata.map((data) => {
                            return (
                                <tr className='mt-2' id={data.id + "__path"}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.fullName}</td>
                                    <td>{data.username}</td>
                                    <td>{data.email}</td>
                                    <button className='btn btn-outline-danger btn-sm' value={data.id} onClick={(e) => deleteUserCall(e)}>DELETE</button>
                                    <button className='btn btn-warning btn-sm mx-2' value={data.id} onClick={(e) => editUserCall(e)}>EDIT</button>
                                </tr>
                            )
                        }) : (<></>)}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Users
