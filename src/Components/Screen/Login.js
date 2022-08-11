import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    // const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')






    const Signin = (e) => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            toast.error("Invalid Email")
            return
        }
        e.preventDefault()


        fetch("/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data, "fffefrew");
                if (data.error) {
                    toast.error(data.error)
                }
                else {
                    toast.success(data.message);
                    // history.push('/login')
                }


            }).catch(err => {
                console.log(err);
            })

    }



    // ------------------Login function-------------------

    const Login = (e) => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            toast.error("Invalid Email")
            return
        }
        e.preventDefault()


        fetch("/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                email,
                password
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data, "fffefrew");
                if (data.error) {
                    toast.error(data.error)
                }
                else {
                    toast.success(data.message);
                    // history.push('/login')
                }


            }).catch(err => {
                console.log(err);
            })

    }



    const showToast = () => {

    };
    const [rightClass, setRightClass] = React.useState(true);









    return (
        <div className="App" >
            <ToastContainer />
            <div class={`${rightClass && "right-panel-active"} container`}
                id="containers">
                <div class="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <span>or use your email for registration</span>

                        <div className="field">
                            <Box
                                component="form"
                                sx={{
                                    "& > :not(style)": { m: 1, width: "25ch" },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="outlined-basic"
                                    label="Name"
                                    variant="outlined"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="password"
                                    variant="outlined"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />


                            </Box>
                        </div>
                        <button
                            onClick={(e) => {
                                Signin(e);
                                showToast();

                            }}
                        >Sign Up</button>

                    </form>
                </div>




                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>

                        <span>or use your account</span>

                        <div className="field">
                            <Box
                                component="form"
                                sx={{
                                    "& > :not(style)": { m: 1, width: "25ch" },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="password"
                                    variant="outlined"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                            </Box>
                        </div>
                        <a href="#">Forgot your password?</a>
                        <button

                            onClick={(e) => {
                                Login(e);
                                showToast();

                            }}

                        >Sign In</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected with us please login with your personal info
                            </p>
                            <button class="ghost" id="signIn"
                                onClick={() => {
                                    setEmail('')
                                    setName("")
                                    setPassword("")
                                    setRightClass(false);
                                }}
                            >
                                Sign In
                            </button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button class="ghost" id="signUp"
                                onClick={() => {

                                    setEmail('')
                                    setPassword('')

                                    setRightClass(true)
                                }}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}
export default Login;