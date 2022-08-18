import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {

    // const history = useHistory()

    const [email, setEmail] = useState('')







    const Signin = (e) => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            toast.error("Invalid Email")
            return
        }
        e.preventDefault()


        fetch("/reset-password", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                email

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


        fetch("/reset-password", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                email,

            })
        }).then(res => res.json())
            .then(data => {
                console.log(data, "fffefrew");
                if (data.error) {
                    toast.error(data.error)
                }
                else {
                    toast.success({ html: data.message });
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
            <div className={`${rightClass && "right-panel-active"} container`}
                id="containers">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1 className="head">Reset your Password</h1>
                        <span className="spin">or use your email for reset password</span>

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



                            </Box>
                        </div>
                        <button className="but"
                            onClick={(e) => {
                                Signin(e);
                                showToast();

                            }}
                        >Reset Password</button>

                    </form>
                </div>




                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1 className="head">Forgot Password</h1>



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


                            </Box>
                        </div>
                        <a href="#" className="anchor">Forgot your password?</a>
                        <button
                            className="but"
                            onClick={(e) => {
                                Login(e);
                                showToast();

                            }}

                        >submit</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="head">Welcome Back!</h1>
                            <p className="para">
                                To keep connected with us please forget your password
                            </p>
                            <button className="ghost but" id="signIn"
                                onClick={() => {
                                    setEmail('')


                                    setRightClass(false);
                                }}
                            >
                                rest
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="head">Hello, Friend!</h1>
                            <p className="para">Enter your personal details and start journey with us</p>
                            <button className="ghost but" id="signUp"
                                onClick={() => {

                                    setEmail('')


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

export default ResetPassword